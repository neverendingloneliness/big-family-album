import heroImage from '../assets/hero/hero.jpeg';
import { motion, useScroll, useTransform } from 'motion/react';
import { slideUpAnimation } from '../animation/motion';

const Hero = () => {

  const { scrollYProgress } = useScroll()


  const y = useTransform(scrollYProgress, [0.1, 0.4], [400, 0])


  return (
    <div className='px-32 relative  min-h-screen translate-y-32'>
      <div className='text-9xl font-bold flex gap-12 flex-col justify-start items-start'>
        <div className='flex items-center gap-48'>
          <motion.h1
            variants={slideUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          >MINAL
          </motion.h1>
          <motion.p
            variants={slideUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            custom={0.5}
            className='text-sm w-72 text-end items-center'>
            Eid Mubarak! A time of joy, unity, and gratitude.
            Wishing you a wonderful celebration with loved ones
            .</motion.p>
        </div>
        <motion.h1
          variants={slideUpAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          custom={0.75}
          className='self-end'>AIDIN WAL</motion.h1>
        <div className='self-end  flex items-center gap-28'>
          <motion.p
            variants={slideUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            custom={1.25} className='text-sm w-72 font-semibold'>Eid Mubarak! May this joyous occasion bring you and your loved ones peace,
            prosperity, and countless blessings. Wishing you a wonderful celebration!</motion.p>
          <motion.h1
            variants={slideUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            custom={1.5}
          >FAIZIN</motion.h1>
        </div>
        <div className='self-center flex grayscale  absolute translate-y-60 opacity-40  transform   bottom-0 -z-10'>
          <motion.img style={{ y}} src={heroImage} alt="hero" className='rounded-3xl' />
        </div>
      </div>
    </div>
  )
}

export default Hero
