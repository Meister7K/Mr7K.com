// @ts-nocheck
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
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset === 0) {
                setIsVisible(true);
            } else {
                setIsVisible(scrollDirection === "up");
            }
        };

        handleScroll();
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

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <motion.div
                ref={navRef}
                initial={{ y: -70 }}
                animate={{ y: isVisible || isOpen ? 0 : -70 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 z-50 w-full"
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
                <div className="w-full flex items-center justify-center mt-2">
                    <button 
                        onClick={toggleVisibility}
                        className='absolute z-50 hover:bg-primary/10 transition duration-200 place-self-center rounded-sm p-1'
                    >
                        <ChevronDown className={`transform transition-transform duration-300 ${
                            isVisible ? 'rotate-180' : ''
                        }`} />
                    </button>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar