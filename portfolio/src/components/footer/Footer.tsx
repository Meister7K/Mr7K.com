// @ts-nocheck


const Footer =()=>{
    const year = new Date(Date.now()).getFullYear().toString()

    return(<div className="h-20 flex flex-col justify-end pb-1 fixed bottom-0 max-w-screen box-border bg-gradient-to-t from-card-foreground w-full to-transparent -z-10 text-secondary">
        <p className="text-center select-none">© 2024-{year} 7K</p>
       <p className="text-center">Designed by 7K, code stolen from everyone else</p> 
    </div>)
}

export default Footer