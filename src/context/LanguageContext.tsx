import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";
import type { Language } from "../data/types";

interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
	t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const getInitialLanguage = (): Language => {
		if (typeof window !== "undefined" && navigator.language) {
			return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
		}
		return "es";
	};

	const [language, setLanguage] = useState<Language>(getInitialLanguage);

	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "es" ? "en" : "es"));
	};

	const t = translations[language];

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
	}
	return context;
};
