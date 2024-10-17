// @ts-nocheck
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LinkList = [
  {name:"Projects", href:"/projects"},
  {name:"Tools", href:"/tools"},
  {name:"Blog", href:"/blogs"},
  {name:"About", href:"/about"},
  {name:"Career", href:"/career"},
  {name:"Contact", href:"/contact"}
];

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-row justify-evenly flex-wrap box-border relative">
      {LinkList.map((link, i) => (
        <Link 
          key={i} 
          href={link.href} 
          className={cn(
            "p-2 m-2 transition-colors duration-200 rounded-sm box-border relative",
            isActive(link.href) 
              ? "text-primary" 
              : "hover:text-primary"
          )}
        >
          {link.name}
          {isActive(link.href) && (
            <motion.div
              layoutId="activeGlow"
              className="absolute inset-0 bg-primary/20 rounded-sm blur-sm -z-10"
              initial={false}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;