import Link from "next/link"
import XLogo from "./icons/XLogo"
import GithubLogo from "./icons/GithubLogo"
import LinkedinLogo from "./icons/LinkedinLogo"
import EmailIcon from "./icons/EmailIcon"

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[30%] flex items-center justify-between py-4 text-xs md:text-sm">
      <div className="text-primary dark:text-secondary">
        Copyright © {new Date().getFullYear()} Juan Cruz Cagnoni
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Link
          href="https://twitter.com/juanccagnoni"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
          target="_blank"
          aria-label="Twitter Profile"
        >
          <XLogo className="h-4 w-4" />
        </Link>
        <Link
          href="https://github.com/juancruzcagnoni"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
          target="_blank"
          aria-label="GitHub Profile"
        >
          <GithubLogo className="h-4 w-4" />
        </Link>
        <Link
          href="https://linkedin.com/in/juancruzcagnoni"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
          target="_blank"
          aria-label="LinkedIn Profile"
        >
          <LinkedinLogo className="h-4 w-4" />
        </Link>
        <Link
          href="mailto:juancagnoni@gmail.com"
          className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
          aria-label="Send Email"
        >
          <EmailIcon className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  )
} 