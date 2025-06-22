import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import { Poppins } from 'next/font/google'
import Navbar from "@/components/layout/Navbar";
 
const poppins = Poppins({
  weight: ['400','800'],
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
    <html suppressHydrationWarning lang="en" className={poppins.className}>
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative p-16 bg-gradient-to-bl from-fuchsiaCustom from-30% to-violetCustom to-90% flex flex-col h-screen">
        
            <Navbar/>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
        
        
          </div>
        </Providers>
      </body>
    </html>
  );
}
