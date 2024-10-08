import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Juan Cruz Cagnoni — Frontend Developer & UX/UI Designer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-primary">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
