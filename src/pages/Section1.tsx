import React, { useRef } from "react";
import { Section1Constant } from "../constant/constant";
import { motion, useScroll, useTransform } from "motion/react";
import { scaleRotateLeftAnimation, scaleRotateRightAnimation, slideUpAnimation } from "../animation/motion";
import { easeOut, spring } from "motion";

const Section1 = () => {

    
    const { scrollYProgress } = useScroll()

    const opacity = useTransform(scrollYProgress, [0.1, 1], [0, 1])
    

    return (
        <div className="px-32 min-h-screen grayscale flex items-center justify-center">
            <div className="grid grid-cols-2  w-full translate-y-1/4 pb-[60rem] h-full items-center">
                {Section1Constant.map((item, i) => (
                        < React.Fragment key = { i } >
                            { i % 2 === 0 ? (
                            <>
                                <motion.div style={{ opacity }} className="h-full text-2xl font-semibold flex items-center justify-center">
                                    {item.text}
                                </motion.div>
                                <div className="h-full flex items-center justify-center">
                                    <motion.img
                                        variants={scaleRotateLeftAnimation}
                                        initial="initial"
                                        whileInView="animate"
                                        custom={i * 0.4}
                                        transition={{ ease: easeOut, duration: 0.6 }}
                                        viewport={{ once: false }} src={item.src} alt="" className="rounded-xl " width={400} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="h-full flex items-center justify-center">
                                    <motion.img variants={scaleRotateRightAnimation}
                                        initial="initial"
                                        whileInView="animate"
                                        custom={i * 0.4}
                                        transition={{ ease: easeOut, duration: 0.6 }}
                                        viewport={{ once: false }} src={item.src} alt="" className="rounded-xl -rotate-6" width={400} />
                                </div>
                                <motion.div style={{opacity}} className="h-full flex text-xl items-center justify-center">
                                    {item.text}
                                </motion.div>
                            </>
                        )}
            </React.Fragment>
                ))}
        </div>
        </div >
    );
};

export default Section1;
