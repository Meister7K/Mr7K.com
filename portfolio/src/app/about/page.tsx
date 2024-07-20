import { ArrowBigRight, ChevronRight } from "lucide-react"
import Link from "next/link"


const AboutPage = ()=>{

    return(<div className="mb-20 bg-background min-h-screen text-center pt-20">
    <h1>A Wild Developer Appeared!</h1>

    {/* image with gameboy theme */}

    <p> I'm Karl, a full stack web developer currently working remotely in Denver, CO. </p>
    {/* mention football sports and teamwork */}
    <p>A skilled Full Stack Web Developer with a background in Project Management, I create impactful software solutions from start to finish. I am dedicated to learning and updating my skills to stay current with industry trends. Known for my attention to detail and ability to solve complex problems, I take pride in writing clean, efficient code. I foster cross-functional collaborations to achieve business goals, and my transition into web development combines my managerial expertise with coding skills to drive progress toward a more efficient, inclusive, and sustainable future.</p>
    {/* rolling tech list with links to docs for each */}

    {/* github data api */}

{/* graph for some sort of data */}

<Link className="flex flex-row" href='/contact'><p>If you'd like to learn more feel free to contact me</p><ChevronRight className="animate-pulse duration-5000 h-7" /></Link>

    </div>)
}

export default AboutPage