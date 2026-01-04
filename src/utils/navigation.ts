import { useEffect, useState, useCallback, useRef } from "react";

// Available sections that support hash navigation
export const AVAILABLE_SECTIONS = [
  "header",
  "about",
  "experience",
  "education",
  "skills",
  "languages",
  "projects",
  "characteristics",
  "actions",
] as const;

export type SectionId = (typeof AVAILABLE_SECTIONS)[number];

// Utility to safely check if we're in browser environment
const isBrowser = typeof window !== "undefined";

// Navigate to a specific section with error handling
export const navigateToSection = (
  sectionId: SectionId,
  smooth: boolean = true
): boolean => {
  if (!isBrowser) return false;

  try {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Section element with id "${sectionId}" not found`);
      return false;
    }

    // Scroll to element
    element.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });

    // Update URL hash without triggering page reload
    const newUrl = `${window.location.pathname}${window.location.search}#${sectionId}`;
    window.history.replaceState({}, "", newUrl);

    return true;
  } catch (error) {
    console.error(`Failed to navigate to section "${sectionId}":`, error);
    return false;
  }
};

// Get section from current URL hash with validation
export const getCurrentSectionFromHash = (): SectionId | null => {
  if (!isBrowser) return null;

  try {
    const hash = window.location.hash.slice(1); // Remove '#'
    if (!hash) return null;

    return AVAILABLE_SECTIONS.includes(hash as SectionId)
      ? (hash as SectionId)
      : null;
  } catch (error) {
    console.error("Failed to get section from hash:", error);
    return null;
  }
};

// Hook for managing hash-based navigation with error handling
export const useHashNavigation = () => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const isInitialized = useRef(false);

  // Handle hash changes from URL
  useEffect(() => {
    if (!isBrowser) return;

    const handleHashChange = () => {
      try {
        const section = getCurrentSectionFromHash();
        if (section) {
          setCurrentSection(section);
          // Only auto-scroll if not during initial load
          if (isInitialized.current) {
            navigateToSection(section, true);
          }
        }
      } catch (error) {
        console.error("Error handling hash change:", error);
      }
    };

    // Check initial hash
    handleHashChange();
    isInitialized.current = true;

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange, { passive: true });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Navigate to section and update hash
  const goToSection = useCallback(
    (sectionId: SectionId, smooth: boolean = true) => {
      try {
        const success = navigateToSection(sectionId, smooth);
        if (success) {
          setCurrentSection(sectionId);
        }
        return success;
      } catch (error) {
        console.error(`Failed to go to section "${sectionId}":`, error);
        return false;
      }
    },
    []
  );

  return {
    currentSection,
    goToSection,
    availableSections: AVAILABLE_SECTIONS,
  };
};

// Hook for tracking the active section using Intersection Observer for better performance
export const useActiveSection = (): SectionId | null => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionsRef = useRef<Map<string, Element>>(new Map());

  useEffect(() => {
    if (!isBrowser) return;

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    try {
      // Find all section elements
      const sectionElements: Element[] = [];
      sectionsRef.current.clear();

      AVAILABLE_SECTIONS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          sectionElements.push(element);
          sectionsRef.current.set(sectionId, element);
        }
      });

      if (sectionElements.length === 0) {
        console.warn("No section elements found for navigation");
        return;
      }

      // Function to find the active section based on scroll position
      const findActiveSection = () => {
        try {
          // Check ALL observed sections, not just entries that changed
          // This fixes the bug where H, P, C weren't highlighting correctly
          const viewportHeight = window.innerHeight;
          const scrollTop = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;

          // If at the very top, always select the first section
          if (scrollTop < 50) {
            const firstSection = AVAILABLE_SECTIONS.find((id) =>
              sectionsRef.current.has(id)
            );
            if (firstSection) {
              setActiveSection(firstSection);
              return;
            }
          }

          // If at the very bottom, select the last visible section
          if (scrollTop + viewportHeight >= documentHeight - 50) {
            // Find the last section that exists in our refs
            for (let i = AVAILABLE_SECTIONS.length - 1; i >= 0; i--) {
              const sectionId = AVAILABLE_SECTIONS[i];
              if (sectionsRef.current.has(sectionId)) {
                setActiveSection(sectionId);
                return;
              }
            }
          }

          // For middle sections, find the one whose top is closest to viewport top
          // but still visible (top is above viewport center)
          let activeSection: SectionId | null = null;
          const viewportCenter = viewportHeight / 2;

          sectionsRef.current.forEach((element, sectionId) => {
            const rect = element.getBoundingClientRect();
            // Section is active if its top is above center and its bottom is below top
            if (rect.top <= viewportCenter && rect.bottom > 0) {
              if (AVAILABLE_SECTIONS.includes(sectionId as SectionId)) {
                // Prefer sections closer to the top of the viewport
                if (
                  !activeSection ||
                  rect.top >
                    (
                      sectionsRef.current.get(activeSection) as Element
                    ).getBoundingClientRect().top
                ) {
                  activeSection = sectionId as SectionId;
                }
              }
            }
          });

          if (activeSection) {
            setActiveSection(activeSection);
          }
        } catch (error) {
          console.error("Error finding active section:", error);
        }
      };

      // Create intersection observer with optimized options
      const observer = new IntersectionObserver(
        () => {
          findActiveSection();
        },
        {
          // Optimize for better performance
          root: null,
          rootMargin: "0px",
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0], // Multiple thresholds for accuracy
        }
      );

      // Observe all section elements
      sectionElements.forEach((element) => {
        observer.observe(element);
      });

      observerRef.current = observer;

      // Also listen to scroll events to catch edge cases
      window.addEventListener("scroll", findActiveSection, { passive: true });

      // Initial check
      findActiveSection();

      // Capture ref values for cleanup
      const currentObserver = observer;
      const currentSections = sectionsRef.current;

      return () => {
        window.removeEventListener("scroll", findActiveSection);
        if (currentObserver) {
          currentObserver.disconnect();
        }
        observerRef.current = null;
        currentSections.clear();
      };
    } catch (error) {
      console.error("Failed to setup intersection observer:", error);

      // Fallback to scroll-based detection if IntersectionObserver fails
      const fallbackHandleScroll = () => {
        try {
          const scrollPosition = window.scrollY + window.innerHeight / 2;
          let closestSection: SectionId | null = null;
          let closestDistance = Infinity;

          AVAILABLE_SECTIONS.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = window.scrollY + rect.top;
              const distance = Math.abs(elementTop - scrollPosition);

              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = sectionId;
              }
            }
          });

          if (closestSection) {
            setActiveSection(closestSection);
          }
        } catch (err) {
          console.error("Error in scroll fallback:", err);
        }
      };

      // Throttled scroll listener as fallback
      let ticking = false;
      const throttledScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            fallbackHandleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", throttledScroll, { passive: true });
      fallbackHandleScroll(); // Initial call

      const fallbackSections = sectionsRef.current;
      return () => {
        window.removeEventListener("scroll", throttledScroll);
        fallbackSections.clear();
      };
    }
  }, []);

  return activeSection;
};

// Keyboard navigation hook
export const useKeyboardNavigation = (
  onNavigate: (sectionId: SectionId) => void
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle navigation when no input is focused
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const currentIndex = AVAILABLE_SECTIONS.findIndex((section) =>
        document.getElementById(section)?.classList.contains("active")
      );

      switch (event.key) {
        case "ArrowDown":
        case "j": {
          // Vim-style navigation
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % AVAILABLE_SECTIONS.length;
          onNavigate(AVAILABLE_SECTIONS[nextIndex]);
          break;
        }

        case "ArrowUp":
        case "k": {
          // Vim-style navigation
          event.preventDefault();
          const prevIndex =
            currentIndex > 0 ? currentIndex - 1 : AVAILABLE_SECTIONS.length - 1;
          onNavigate(AVAILABLE_SECTIONS[prevIndex]);
          break;
        }

        case "Home":
          event.preventDefault();
          onNavigate("header");
          break;

        case "End":
          event.preventDefault();
          onNavigate("actions");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNavigate]);
};

// Generate section URL with hash safely
export const getSectionUrl = (
  sectionId: SectionId,
  baseUrl?: string
): string => {
  if (!isBrowser) return `#${sectionId}`;

  try {
    const base =
      baseUrl ||
      `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    return `${base}#${sectionId}`;
  } catch (error) {
    console.error("Failed to generate section URL:", error);
    return `#${sectionId}`;
  }
};

// Copy section link to clipboard with error handling
export const copySectionLink = async (
  sectionId: SectionId
): Promise<boolean> => {
  if (!isBrowser) return false;

  try {
    const url = getSectionUrl(sectionId);

    // Check if clipboard API is available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();

      const success = document.execCommand("copy");
      document.body.removeChild(textArea);
      return success;
    }
  } catch (error) {
    console.error("Failed to copy section link:", error);
    return false;
  }
};

// Validate that all required sections exist in the DOM
export const validateSections = (): {
  valid: boolean;
  missing: SectionId[];
} => {
  if (!isBrowser) {
    return { valid: false, missing: [...AVAILABLE_SECTIONS] };
  }

  const missing: SectionId[] = [];

  AVAILABLE_SECTIONS.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      missing.push(sectionId);
    }
  });

  return {
    valid: missing.length === 0,
    missing,
  };
};
