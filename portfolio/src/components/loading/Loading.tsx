// @ts-nocheck

const Loading = ()=>{

    return(
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="border-8 border-t-8 border-muted-background border-t-destructive rounded-full w-32 h-32 animate-spin"></div>
        <div className="mt-4 text-xl text-ring">Loading</div>
      </div>
    )
}

export default Loading