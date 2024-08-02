
import Timeline from "@/components/career/timeline/Timeline"

const workArr =[
    {
        title: "Web Developer",
        years: "2023-Present",
        company: "MXS Solutions",
        location: "Denver, CO(remote)",
        description:
          "Part of the design and development team for MXS. A company who services dealership with multiple tech based business needs.",
        details: [
          "Built and optimized secure web pages and assets for several clients.",
          "Provide continued support for hosted assets along with optimizing SEO and user accessibility on several platforms.",
          "Wrote scripts for better site UI and backend data transfer.",
        ],
      },
      {
        title: "Project Coordinator",
        years: "2020-2023",
        company: "LSC",
        location: "Austin, TX(remote)",
        description:
          "Performed project coordination and management duties for one large and several smaller clients that rely on LSC's Integrity Management group. ",
        details: [
          "Created Microsoft Teams and SharePoint pages for client groups within the organization to promote a more streamlined and open working environment for client teams.",
          "Built out and maintained workbooks for project work that include: Proposals, Contacts, Budgets, Schedules, Scope of work, Change orders, Deliverables, WBS, and lead Lessons Learned post project.",
          "Received several peer merit awards for exceptional work ethic and teamwork on large client projects.",
          "Managed a team of several technicians over five lines of business spanning several states.",
        ],
      },
      {
        title: "CP Technician",
        years: "2018-2020",
        company: "LSC",
        location: "Roseville, MN(journeyman)",
        description:
          "Performed installation and maintenance on hardware for electrical systems for energy companies. Collected and ran data analytics on sustainability systems for clients. performed pre-construction surveys for future safety systems. Lead teams of 3-6 technicians on integrity management  and construction projects for large energy companies.",
        details: [
          "Provided project completion safely and on schedule, accurate and timely data gathering for indirect surveys",
          "Worked on CP design and field testing, construction installations, reporting and inspections.",
          "Additional responsibilities included internal project quality assigned by supervisory staff to ensure maintenance of LSC equipment/calibrations, vehicles, and office space.",
        ],
      },
      {
        title: "Civil Consultant Intern (Financial Crimes Investigation Unit)",
        years: "2017",
        company: "Duluth Police Dept.",
        location: "Duluth, MN",
        description:
          "Shadowed and participated in operations of the department. Reviewed financial documents and imported data into the national database. Created data documents and reports from findings along with ran queries for case specific evidence.",
        details: [
          "Worked in Excel to record, look up, and report on data obtained in financial cases.",
          "Reviewed copious amounts of financial documents and learned to spot discrepancies through continuous reviews. Peer reviewed search warrants and other documents.",
          "Learned how to use police sponsored communication skills to effectively connect with all audiences. Met and communicated with a diverse community. Worked with a team of investigators on many financial cases.",
          "Solidified the values of teamwork and the importance of planning and communication with multiple team members.",
        ],
      },
      {
        title: "Bartender, Bouncer, Line Cook",
        years: "2014-2017",
        company: "Grandma's Sports Bar",
        location: "Duluth, MN",
        description:
          "Worked several positions while completing my undergraduate degree and playing football at UMD. Learned valuable time management and additional soft skills.",
          details:["Learned excellent time management and communication skills by juggling work, classes, football, and coursework"]
      },
    
]
const CareerPage = ()=>{

    return(<div className=" w-full p-4 box-border lg:mb-20 bg-background min-h-screen">
        <div className="mx-auto max-w-screen-xl py-10">
           <h2 className="mt-20 text-4xl text-center mb-10">My Extended Work History</h2> 
           {workArr.map((job, index) => (
            <>
              <li className=" list-none" key={index}>
                <div className="li-top">
                  <h3 className="title text-2xl">{job.title}</h3>
                  <h3 className="years">{job.years}</h3>
                </div>

                <div className="li-bot">
                  <h4 className="company">{job.company}</h4>
                  <h4 className="location">{job.location}</h4>
                </div>
                <p className="job-description">
                  {job.description}
                </p>
                {job.details ?(<details className="transition-all duration-200">
                <summary className="text-center text-lg">Details & Achievments</summary>
                <ul className="detail-list">
                  {job?.details?.map((detail, index) => (
                    <li className="list-disc ml-3 " key={index}><p>{detail}</p></li>
                  ))}
                </ul>
              </details>):""}</li>
              <br />
            </>
          ))}
        </div>
   
    
    {/* Skills */}
     {/* timeline */}
     <Timeline  />
     {/* Resume */}
    </div>)
}

export default CareerPage