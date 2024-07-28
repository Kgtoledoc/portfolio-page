"use client"
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image src="https://images.unsplash.com/photo-1519744699897-3544da770a84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBob3RvJTIwcGVyc29ufGVufDB8fDB8fHww" alt='Kevin Photo'
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-lg' />
                    </motion.div>

                    <motion.span className='absolute bottom-0 right-0 text-4x1'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >
                        ✋
                    </motion.span>
                </div>
            </div>
            <motion.h1 className='mb-10 mt-4 px-4 text-2x1 font-medium !leading-[1.5] sm:text-4x1'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hello, I'm Kevin Toledo</span> I'm a{" "}
                <span className='font-bold'>Cloud Engineer and DevOps Engineer</span> with{" "}
                <span className='font-bold'>5 years of experience.</span> I enjoy creating {" "}
                <span className='italic'>apps and deploying into Cloud Providers using CICD pipelines.</span> My focus is{" "}
                <span className='underline'>DevOps pratices and Cloud Architectures</span>
            </motion.h1>
            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition-1 cursor-pointer'>Contact me here <BsArrowRight className='opacity-80 group-hover:traslate-x-1 transition' /></Link>
                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition-1 cursor-pointer border border-black/10' href='/CV.pdf' download={true}>Download CV <HiDownload className='opacity-60 group-hover:traslate-y-1 transition' /></a>
                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition-1 cursor-pointer border border-black/10' href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition-1 cursor-pointer border border-black/10' href='https://github.com' target='_blank'><FaGithubSquare /></a>

            </motion.div>
        </section>
    )
}