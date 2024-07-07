import { now } from "three/examples/jsm/libs/tween.module.js"

const Footer =()=>{
    const year = new Date(Date.now()).getFullYear().toString()

    return(<div className="h-20 flex flex-col justify-end pb-1 fixed bottom-0 w-screen bg-gradient-to-t from-card-foreground to-transparent -z-10 text-secondary">
        <p className="text-center select-none">© 2024-{year} 7K</p>
       <p className="text-center">Designed by Me, code stolen from everyone else</p> 
    </div>)
}

export default Footer