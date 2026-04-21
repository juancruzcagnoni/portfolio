import { GeistSans } from 'geist/font/sans'
import { GeistPixelSquare } from 'geist/font/pixel'
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  title: "Juan Cruz Cagnoni",
  description: "",
  icons: {
    icon: '/J.svg',
    shortcut: '/J.svg',
    apple: '/J.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistPixelSquare.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/J.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/J.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/J.svg" />
      </head>
      <body className={` bg-secondary dark:bg-primary text-primary dark:text-secondary transition-colors duration-300 min-h-screen flex flex-col`} suppressHydrationWarning>
        <LanguageProvider>
          <main className="flex-grow">
            {children}
          </main>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
