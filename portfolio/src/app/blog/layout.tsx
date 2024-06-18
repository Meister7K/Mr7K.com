import Link from "next/link"

const blogsList = [{title:'pro1', href:"blog/1", id:"1"}, {title:'pro2', href:"blog/2", id:"2"},
    {title:'pro3', href:"blog/3", id:"3"}
]

export default function blogLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex flex-row w-full">
        <nav className=" w-1/12 min-w-10 flex flex-col justify-between align-middle h-full static">
            {blogsList.map((blog,i)=>(
                <Link key={i} href={blog.href}>{blog.title}</Link>
                ))}
        </nav>
        <div className="w-5/6 ml-">
             {children}
        </div>
       
      </section>
    )
  }