import Link from "next/link"
import Image from "next/image"

interface SecondaryData {
    src: string 
    title: string | null
    description: string | null
    alt: string
    href: string | object
    width: number 
    height: number
}

const SecondarySection = ({ src, title, description, alt, href, width, height }: SecondaryData)=>{

    return(<div className=" h-full bg-muted rounded-lg p-4 relative flex justify-center align-middle box-border w-full">
        <Link href={href} className="group">
        <Image src={src} alt={alt} width={width} height={height} className="rounded-lg relative"/>
        <h2 className="absolute z-10 top-2 left-2 p-4 text-2xl">{title}</h2>
        <p className=" absolute bottom-0 right-2 z-20 opacity-0 group-hover:opacity-100 transition-all p-4">{description}</p>
        </Link>
        

    </div>)
}

export default SecondarySection