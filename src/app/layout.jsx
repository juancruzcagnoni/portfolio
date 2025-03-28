import { GeistSans } from 'geist/font/sans'
import Footer from './components/Footer'
import "./globals.css";

export const metadata = {
  title: "Juan Cruz Cagnoni",
  description: "Portfolio of Juan Cruz Cagnoni, a passionate developer and designer creating innovative digital solutions. Explore my projects and skills in web development and UX/UI design.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${GeistSans.className} bg-secondary dark:bg-primary text-primary dark:text-secondary transition-colors duration-300`} suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  );
}
