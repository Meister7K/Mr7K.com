"use client"
import { ModeToggle } from "../theme/themeToggle"
import Logo from "../logo/Logo"
import Link from "next/link"
import NavLinks from "./NavLinks"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollDirection } from "@/hooks/useScrollDirections"
import {AlignJustify, ChevronDown, X} from "lucide-react"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const scrollDirection = useScrollDirection();
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        setIsVisible(true);
        setIsOpen(false);
    }, [pathname]); // Reset state when route changes

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset === 0) {
                setIsVisible(true);
            } else {
                setIsVisible(scrollDirection === "up");
            }
        };

        handleScroll(); // Call once to set initial state
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollDirection]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        setIsVisible(true);
    };

    return (
        <>
        
        
            <motion.div
                ref={navRef}
                initial={{ y: -100 }}
                animate={{ y: isVisible || isOpen ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50"
            >
                <nav className="flex flex-row justify-between px-8 items-center w-full box-border flex-wrap backdrop-blur-md bg-primary/5 border-b-2">
                    <Link href="/" className="block"><Logo /></Link>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar}>
                            {isOpen ? (<X/>) : (<AlignJustify />)}
                        </button>
                    </div>
                    <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center`}>
                        <NavLinks />
                        <ModeToggle />
                    </div>
                </nav>
                
            </motion.div>
        
        
        </>
    )
}

export default Navbar

{/* { !isVisible ? (<button className=" hover:bg-secondary p-1 rounded-sm z-50" onClick={toggleNavbar}><ChevronDown/>
                    </button>): null} */}