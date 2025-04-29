"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"
import GithubLogo from "./icons/GithubLogo"

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
    <nav className="relative top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] flex items-center justify-between">

      <div className="flex items-center gap-3">
        <Image
          width={40}
          height={40}
          src="/icon.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <Link href="/" className="tracking-tight text-base md:text-lg font-bold text-primary dark:text-secondary transition-colors duration-300">
            Juan Cruz Cagnoni
          </Link>
          <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">SAP Fiori developer & Python enthusiast</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6">
        <Link
          href="https://github.com/juancruzcagnoni"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
        >
          <GithubLogo className="h-4 w-4" />
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

