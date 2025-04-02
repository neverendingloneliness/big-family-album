import React, { useRef, useState } from 'react'
import { GalleryConstant } from '../constant/constant'
import { animate, AnimatePresence, motion, spring, useScroll, useTransform } from 'framer-motion'
import { div, i } from 'motion/react-client'
import { opacityAnimation, slideUpAnimation, slideUpAnimationReversed } from '../animation/motion'

const Gallery = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const swipeConfidenceThreshold = 50

    const SwipeCard = (direction: "left" | "right" | "top" | "bottom") => {
        if ((direction === "left" || direction === "top") && currentIndex < GalleryConstant.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else if ((direction === "right" || direction === "bottom") && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const { scrollYProgress } = useScroll()

    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [200, 1])

    return (
        <div className='min-h-screen '>
            <div className='flex justify-center items-center  h-screen overflow-hidden relative'>
                {GalleryConstant.length > 0 && (
                    <motion.img
                        key={currentIndex}
                        src={GalleryConstant[currentIndex].image}
                        alt=""
                        className="absolute z-30  w-[28rem] h-[36rem] rounded-lg shadow-lg"
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        onDragEnd={(_, info) => {
                            if (Math.abs(info.velocity.x) > swipeConfidenceThreshold) {
                                SwipeCard(info.velocity.x < 0 ? "left" : "right");
                            } else if (Math.abs(info.velocity.y) > swipeConfidenceThreshold) {
                                SwipeCard(info.velocity.y < 0 ? "top" : "bottom");
                            }
                        }}
                        initial={{ opacity: 0, x: 100, y: 50, scale: 0.8, rotateZ: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotateZ: 0 }}
                        exit={{ opacity: 0, x: -100, y: -50, scale: 0.8, rotateZ: -10 }}
                        transition={{ duration: 0.4 }}
                    />
                )}
                <div className='absolute  flex flex-col gap-16 items-center text-9xl font-bold z-10'>
                    <motion.h1 variants={opacityAnimation}
                        initial="initial"
                        whileInView="animate"
                        custom={1.25}
                        viewport={{ once: false }} className='text-3xl font-normal mb-10'>Swipe The Picture
                    </motion.h1>
                    <motion.h1 variants={opacityAnimation}
                        initial="initial"
                        whileInView="animate"
                        custom={0.5}
                        viewport={{ once: false }}   className='self-start -translate-y-1/2 '>BIG</motion.h1>
                    <motion.h1 variants={opacityAnimation}
                        initial="initial"
                        whileInView="animate"
                        custom={0.75}
                        viewport={{ once: false }}   className='self-end translate-x-1/2'>FAMILY</motion.h1>
                    <motion.h1  variants={opacityAnimation}
                        initial="initial"
                        whileInView="animate"
                        custom={1}
                        viewport={{ once: false }}  className='self-end text-[12rem] translate-y-1/4'>GALLERY</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default Gallery
