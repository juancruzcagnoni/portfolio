"use client";
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    typeof window !== "undefined" && localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "es"
  );

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "es" ? "en" : "es";
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", next);
      }
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
