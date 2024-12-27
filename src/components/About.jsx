import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from "../utils/motion"
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale:1,
            speed: 450
          }}
          className='flex flex-col justify-evenly items-center px-12 py-5 bg-tertiary min-h-[280px] rounded-[20px]'
        >
          <img src={icon} alt="icon" className='w-16 h-16 object-contain' />
          <h3 className='text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)}>
        I&#39;m a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js and Three.js. I&#39;m quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let&#39;s work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}></ServiceCard>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")