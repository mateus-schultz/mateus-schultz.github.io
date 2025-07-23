import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import { CV } from "./pages/CV";
import { RESUME } from "@/constants/mateus";

const CVPage = () => {
  const { forceTheme } = useTheme();

  useEffect(() => {
    forceTheme("light");
  }, [forceTheme]);

  return <CV resume={RESUME} />;
};

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
