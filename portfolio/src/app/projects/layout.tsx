import Link from "next/link"

const projectsList = [{title:'pro1', href:"projects/1", id:"1"}, {title:'pro2', href:"projects/2", id:"2"},
    {title:'pro3', href:"projects/3", id:"3"}
]

export default function projectLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex flex-row w-full">
        <nav className=" w-1/12 min-w-10 flex flex-col justify-between align-middle h-full static">
            {projectsList.map((project,i)=>(
                <Link key={i} href={project.href}>{project.title}</Link>
                ))}
        </nav>
        <div className="w-5/6 ml-">
             {children}
        </div>
       
      </section>
    )
  }