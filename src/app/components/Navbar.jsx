"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"
import GithubLogo from "./icons/GithubLogo"
import { useLanguage } from "../context/LanguageContext"
import * as Switch from "@radix-ui/react-switch"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Globe, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -5, filter: "blur(4px)", transition: { duration: 0.15, ease: "easeIn" } },
  }

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
          <Link href="/" className="font-instrument-serif text-xl text-primary dark:text-secondary transition-colors duration-300">
            Juan Cruz Cagnoni
          </Link>
          {/* <span className="text-sm text-zinc-600 dark:text-zinc-400">Fiori Developer | Mobile App Developer</span> */}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 md:gap-6">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="text-primary dark:text-secondary transition focus:outline-none"
              aria-label="Select language"
            >
              <Globe className="w-5 h-5" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              sideOffset={8}
              className="z-[9999] min-w-[120px] rounded-lg bg-white dark:bg-zinc-900"
            >
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="z-[9999] min-w-[120px] rounded-lg bg-white dark:bg-zinc-900 py-1 px-1 backdrop-blur-sm"
              >
                <DropdownMenu.Item
                  onSelect={() => language !== "en" && toggleLanguage()}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm rounded transition-colors duration-200 ${language === "en"
                    ? "bg-accent text-primary"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                >
                  <span role="img" aria-label="English">🇺🇸</span> English
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => language !== "es" && toggleLanguage()}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-sm rounded transition-colors duration-200 ${language === "es"
                    ? "bg-accent text-primary"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                >
                  <span role="img" aria-label="Español">🇪🇸</span> Español
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <Link
          href="https://github.com/juancruzcagnoni"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
        >
          <GithubLogo className="h-5 w-5" />
        </Link>
        <button
          onClick={toggleTheme}
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </div>
    </nav>
  )
}

