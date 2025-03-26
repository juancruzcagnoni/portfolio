"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import XLogo from "./icons/XLogo"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setIsDarkMode(!isDarkMode)
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%] flex items-center justify-between py-4">
      <div className="flex">
        <Link href="/" className="tracking-tight text-base md:text-lg font-bold text-primary dark:text-secondary transition-colors duration-300">
          Juan Cruz Cagnoni
        </Link>
      </div>

      <div className="flex items-center justify-between gap-2 md:gap-4">
        <Link
          href="/reading"
          className="text-sm md:text-base text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
        >
          Reading
        </Link>
        <Link
          href="https://twitter.com/juanccagnoni"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
        >
          <XLogo className="h-4 w-4" />
        </Link>
        <button
          onClick={toggleTheme}
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
      </div>
    </nav>
  )
}

