
import { ModeToggle } from "../theme/themeToggle"
import Logo from "../logo/Logo"
import Link from "next/link"
import NavLinks from "./NavLinks"

const Navbar =()=>{

    return(
        <nav className="flex flex-row align-middle justify-between">
            <Link href="/" className="h-20 w-20 m-5"><Logo className="float-1"/></Link>
            <NavLinks/>
            <ModeToggle />

        </nav>
    )
}

export default Navbar