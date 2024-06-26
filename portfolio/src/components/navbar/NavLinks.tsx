import Link from "next/link"


const LinkList = [{name:"Projects", href:"/projects"},{name:"Blog", href:"/blogs"},{name:"About", href:"/about"},{name:"Career", href:"/career"}, {name:"Contact", href:"/contact"}]

const NavLinks =()=>{

    return(
        <div className=" flex flex-row justify-evenly flex-wrap">
            {LinkList.map((link, i)=>{
                return(<Link key={i} href={link.href} className="p-2 m-2">{link.name}</Link>)
            })}

        </div>
    )
}

export default NavLinks