
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        
            <motion.div className="fixed top-0 left-0 h-2 bg-destructive z-50 origin-* w-full" style={{ scaleX }} />
        
    )

}

export default ProgressBar