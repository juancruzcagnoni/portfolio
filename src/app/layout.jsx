import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juan Cruz Cagnoni — Developer & Designer",
  description: "Portfolio of Juan Cruz Cagnoni, a passionate developer and designer creating innovative digital solutions. Explore my projects and skills in web development and UX/UI design.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-primary">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
