"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const LinkList = [
  {name:"Projects", href:"/projects"},
  {name:"Blog", href:"/blogs"},
  {name:"About", href:"/about"},
  {name:"Career", href:"/career"},
  {name:"Contact", href:"/contact"}
]

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-row justify-evenly flex-wrap box-border">
      {LinkList.map((link, i) => (
        <Link 
          key={i} 
          href={link.href} 
          className={cn(
            "p-2 m-2 transition-colors duration-200 rounded-sm box-border",
            isActive(link.href) 
              ? "bg-background text-primary border" 
              : "hover:bg-muted-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavLinks