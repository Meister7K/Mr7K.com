
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from '../components/loading/Loading'
import { ThemeProvider } from "@/components/theme/themeProvider";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Intro from "@/components/loading/Intro";
import PageTransition from "@/components/loading/PageTransition";
import Footer from "@/components/footer/Footer";
import { Josefin_Sans } from 'next/font/google'
 
const Josefin = Josefin_Sans({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={cn("relative h-full font-sans antialiased mb-10 bg-background  ", Josefin.className)}>
        <Suspense fallback={<Loading />}>
          <Intro/>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <PageTransition>{children}</PageTransition>
              {/* Footer */}
              
            </ThemeProvider>
          
        </Suspense>
      </body>
      
    </html>
  );
}