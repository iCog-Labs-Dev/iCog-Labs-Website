import "./global.css"
import type { ReactNode } from "react"
import { Inter, Poppins } from "next/font/google"
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/navBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "iCogLabs - Engineering the Future of Intelligence",
  description:
    "iCogLabs is a pioneering AI research and development company building cutting-edge solutions in artificial intelligence, machine learning, robotics, and blockchain.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

