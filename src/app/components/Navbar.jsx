"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import LinkedinLogo from "./icons/LinkedinLogo"
import { useLanguage } from "../context/LanguageContext"

export default function Navbar() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const applyTheme = (value) => {
    if (value === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    if (saved === "light" || saved === "dark") {
      setTheme(saved)
      applyTheme(saved)
    } else {
      setTheme("light")
      applyTheme("light")
    }
  }, [])

  const handleThemeToggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    applyTheme(next)
  }

  if (!mounted) return null

  return (
    <nav className="relative top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <Link href="/" className="font-instrument-serif text-xl text-primary dark:text-secondary transition-colors duration-300">
            /jcc<span className="animate-[blink_1s_step-end_infinite]">|</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <Link
          href="https://www.linkedin.com/in/juancruzcagnoni/"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
        >
          <LinkedinLogo className="h-5 w-5" />
        </Link>

        <button
          onClick={toggleLanguage}
          className="text-primary dark:text-secondary text-sm font-medium w-7 text-center transition-colors duration-300 hover:text-accent dark:hover:text-accent focus:outline-none"
          aria-label="Toggle language"
        >
          {language === "en" ? "EN" : "ES"}
        </button>

        <button
          onClick={handleThemeToggle}
          className="text-primary dark:text-secondary transition-colors duration-300 hover:text-accent dark:hover:text-accent focus:outline-none"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </div>
    </nav>
  )
}

