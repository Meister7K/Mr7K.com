
"use client"

interface TimelineData{
    date: string | number ;
    title: string;
    desc: string;
    id: string ;


}

const TimelinePoint = ({date, title, desc, id}:TimelineData)=>{

    return(<div id={id}>
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{desc}</p>
    </div>)

}


export default TimelinePoint