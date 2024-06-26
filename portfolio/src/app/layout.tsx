
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { lazy, Suspense } from "react";
import Loading from '../components/loading/Loading'
import { ThemeProvider } from "@/components/theme/themeProvider";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr. 7K Personal Portfolio",
  description: "The Personal portfolio of Mr. 7K and his interests including, Finance, Investing, Coding, Programming, Sports, & Gaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">



      
        <body className={cn("relative h-full font-sans antialiased")}>
          <Suspense fallback={<Loading />}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <Navbar />
          {children}
          {/* Footer */}
          </ThemeProvider></Suspense>
        </body>
        



    </html >
  );
}
