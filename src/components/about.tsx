"use client"
import React from 'react'
import {motion} from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
    return (
        <motion.section className='mb-24 max-w-[45rem] text-center leading-8 sm:mb-40'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.125}}>
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
            I'm an experienced professional specializing in cloud engineering, devops, and cybersecurity. With a Master's degree in Cybersecurity from IMF and a Bachelor's in Electrical Engineering from Universidad Nacional de Colombia, I've built a strong foundation in technology. My journey includes roles at Globant, Oracle, and Banco de Bogota, where I led cloud teams, managed deployments, and implemented CI/CD automation. I hold AWS and Oracle Cloud certifications, staying updated with industry trends.
            Beyond work, I enjoy soccer, reading, guitar, and cooking. With a passion for innovation and a diverse skill set, I'm committed to making a meaningful impact in the tech world.
            </p>

        </motion.section>
    )
}