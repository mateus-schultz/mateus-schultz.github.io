import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          id="language-selector"
          aria-label="Language Selector"
          title="Language"
          variant="outline"
          size="icon"
          className="bg-white/5 border-white/20 text-white hover:bg-white/10"
        >
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-slate-800 border-slate-700"
      >
        <DropdownMenuItem
          onClick={() => changeLanguage("en-US")}
          className="text-slate-200 hover:bg-slate-700 focus:bg-slate-700"
        >
          {t("language.english")}
          <Check
            className={i18n.language === "en-US" ? "block ml-2" : "hidden"}
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("pt-BR")}
          className="text-slate-200 hover:bg-slate-700 focus:bg-slate-700"
        >
          {t("language.portuguese")}
          <Check
            className={i18n.language === "pt-BR" ? "block ml-2" : "hidden"}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
