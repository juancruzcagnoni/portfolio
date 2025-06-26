import { GeistSans } from 'geist/font/sans'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata = {
  title: "Juan Cruz Cagnoni",
  description: "I&apos;m Juan Cruz Cagnoni, a passionate developer creating innovative digital solutions. Now I&apos;m working on SAP BTP and Fiori development, creating user-friendly and efficient business applications. In November 2023, I joined  DL Consultores as an SAP BTP/Fiori developer, where I work on designing and implementing modern enterprise solutions.",
  icons: {
    icon: '/J.svg',
    shortcut: '/J.svg',
    apple: '/J.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/J.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/J.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/J.svg" />
      </head>
      <body className={` bg-secondary dark:bg-primary text-primary dark:text-secondary transition-colors duration-300 min-h-screen flex flex-col`} suppressHydrationWarning>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
