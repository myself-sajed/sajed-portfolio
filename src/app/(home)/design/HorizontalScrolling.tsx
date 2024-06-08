"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Title from "../components/Title";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh]">
            <div className="sticky top-10">
                <Title title="How I Work?" />
            </div>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <motion.div style={{ x }} className="flex gap-10 text-[6rem] font-bold">
                    {textArr.map((text) => {
                        return <span className={`whitespace-nowrap ${text.color}`} key={text.title}>{text.title}</span>
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollCarousel


const textArr = [{ title: "I Observe.", color: "text-blue-300" }, { title: "Analyse.", color: "text-blue-400" }, { title: "Design.", color: "text-blue-500" }, { title: "Build.", color: "text-blue-600" }, { title: "Deliver.", color: "text-blue-700" }];

