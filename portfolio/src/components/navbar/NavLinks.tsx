import Link from "next/link"


const LinkList = [{name:"Projects", href:"/projects"},{name:"Blog", href:"/blog"},{name:"About", href:"/about"},{name:"Work", href:"/work"},]

const NavLinks =()=>{

    return(
        <div>
            {LinkList.map((link, i)=>{
                return(<Link key={i} href={link.href} className="p-2 m-2">{link.name}</Link>)
            })}

        </div>
    )
}

export default NavLinks