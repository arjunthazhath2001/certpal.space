import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import { Inter } from 'next/font/google'
import MainNavbar from "@/components/layout/Navbar";
 
const inter = Inter({
  weight: ['400','700'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased",
          
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative bg-gradient-to-bl bg-black
           flex flex-col min-h-screen">
        
            <MainNavbar/>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
        
        
          </div>
        </Providers>
      </body>
    </html>
  );
}
