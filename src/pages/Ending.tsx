import { useRef } from 'react'
import ending from "../assets/ending/bg.png";
import { motion, useScroll, useTransform } from 'framer-motion';


const Ending = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })


  const yText = useTransform(scrollYProgress, [0.1, 0.76], [-300, 600])
  const yImage = useTransform(scrollYProgress, [0.1, 0.5], [-500, 300])
  

  return (
    <div className='min-h-screen justify-center  flex flex-col items-center '>
      <div ref={ref} className='relative w-full p-10  text-center flex flex-col items-center justify-center  '>
        <motion.h1 style={{ y:yText }} className='text-2xl'>May Allah Bless Us</motion.h1>
        <div className=" relative w-full h-[100vh] mt-10  ">
          <motion.img
            style={{y:yImage}}
            src={ending}
            alt=""
            className="absolute top-0 left-0  w-full h-[115%] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Ending
