import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInOnScroll({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8}}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            {children}
        </motion.div>
    );
}

export function SlideLeftWhenVisible({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50}}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            {children}
        </motion.div>
    );
}

export function SlideRightWhenVisible({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50}}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            {children}
        </motion.div>
    );
}