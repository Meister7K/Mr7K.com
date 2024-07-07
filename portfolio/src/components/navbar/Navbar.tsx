
import { ModeToggle } from "../theme/themeToggle"
import Logo from "../logo/Logo"
import Link from "next/link"
import NavLinks from "./NavLinks"

const Navbar =()=>{

    return(
        <nav className="flex flex-row justify-between px-8 items-center w-full box-border flex-wrap absolute z-30 backdrop-blur-md bg-gradient-to-b">
            <Link href="/" className="h-10 w-20 m-5"><Logo /></Link>
            <NavLinks/>
            <ModeToggle />

        </nav>
    )
}

export default Navbar