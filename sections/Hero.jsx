'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import {staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
    <section className='pt-[85px]'>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <motion.div variants={textVariant(0.9)} className="">
        <div className="flex flex-row justify-center">
            <div className='flex flex-row mt-8'>
            <svg width="403" height="403" viewBox="0 0 403 403" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="201.5" cy="201.5" r="201.5" fill="white"/>
            </svg>
              <div className="flex flex-col items-center justify-end ml-24">
                <h2 className=" text-white/[.70] text-[28px] font-style: normal font-weight: 400 ">Hello I'm</h2>
                <a className="text-white text-[50px] font-semibold;">Dennis Schielke</a>
                <h2 className="text-white/[.70] text-[36px]">A Cognitive Computer</h2>
                <h2 className="text-white/[.70] text-[36px]">Science Student</h2>
                <div className='flex flex-row'>
                <motion.div className="demo" whileHover={{scale: 1.15}}>
                  <a href='https://github.com/d3nnis2001' class="text-gray-600 hover:text-blue-500 transition duration-300">
                    <img src="/github.png" alt="github" className="sm:h-[77px] h-[77px] m-7 relative"></img>
                  </a>
                </motion.div>
                <motion.div className="demo" whileHover={{scale: 1.15}}>
                  <a href='https://www.linkedin.com/in/dennis-schielke-60b82525a/'>
                    <img src="/linkedin.png" alt="linkedin" className=" sm:h-[77px] h-[77px] m-7 relative"></img>
                  </a>
                </motion.div>
                </div>
              </div>
            </div>
        </div>
        </motion.div>
      </motion.div>
    </section>
);

export default Hero;
