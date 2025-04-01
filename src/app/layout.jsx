import { GeistSans } from 'geist/font/sans'
import Footer from './components/Footer'
import "./globals.css";

export const metadata = {
  title: "Juan Cruz Cagnoni",
  description: "Portfolio of Juan Cruz Cagnoni, a passionate developer and designer creating innovative digital solutions. Explore my projects and skills in web development and UX/UI design.",
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
      <body className={`${GeistSans.className} bg-secondary dark:bg-primary text-primary dark:text-secondary transition-colors duration-300 min-h-screen flex flex-col`} suppressHydrationWarning>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
