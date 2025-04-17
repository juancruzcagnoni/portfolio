import Link from "next/link"
import XLogo from "./icons/XLogo"
import GithubLogo from "./icons/GithubLogo"
import LinkedinLogo from "./icons/LinkedinLogo"
import EmailIcon from "./icons/EmailIcon"
import Tooltip from "./ui/Tooltip"

export default function Footer() {
  return (
    <footer className="w-full py-4 md:py-10">
      <div className="relative left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[40%] flex items-center justify-between text-xs md:text-sm">
        <div className="text-primary dark:text-secondary">
          Copyright © {new Date().getFullYear()} Juan Cruz Cagnoni
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Tooltip content="Follow on X">
            <Link
              href="https://twitter.com/juanccagnoni"
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
              target="_blank"
              aria-label="Twitter Profile"
            >
              <XLogo className="h-4 w-4" />
            </Link>
          </Tooltip>

          <Tooltip content="Follow on GitHub">
            <Link
              href="https://github.com/juancruzcagnoni"
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
              target="_blank"
              aria-label="GitHub Profile"
            >
              <GithubLogo className="h-4 w-4" />
            </Link>
          </Tooltip>

          <Tooltip content="Connect on LinkedIn">
            <Link
              href="https://linkedin.com/in/juancruzcagnoni"
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
              target="_blank"
              aria-label="LinkedIn Profile"
            >
              <LinkedinLogo className="h-4 w-4" />
            </Link>
          </Tooltip>

          <Tooltip content="Send email">
            <Link
              href="mailto:juancagnoni@gmail.com"
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
              aria-label="Send Email"
            >
              <EmailIcon className="h-4 w-4" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </footer>
  )
} 