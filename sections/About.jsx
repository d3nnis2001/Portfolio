'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {staggerContainer, textVariant } from '../utils/motion';

const About = () => (
  <section className='pt-[110px]'>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}className={`${styles.innerWidth} mx-auto flex flex-col`}>
    <motion.div variants={textVariant(0.3)} className="">
    <div className='flex flex-col justify-center items-center pt-[110px]' id="About Me">
      <a className='text-white font-mainFont text-[50px]'> About Me</a>
      <a className='text-white/[.6] font-mainFont text-[25px]'> Get to know me</a>
      <div className='flex flex-row items-center'>
        <img src='/germany.png' alt="germany" className='sm:h-[676px] h-[676px] relative opacity-80'></img>
        <div className='flex flex-col mr-[65px]'>
          <div className='flex flex-row justify-start'>
            <a className="text-white text-[30px] font-mainFont mr-6">
                Born:    
            </a>
          </div>
          <a className="text-white/[.6] text-[30px] font-mainFont mb-6">
              Bielefeld, 22nd October 2001
          </a>
          <div className='flex flex-row justify-start'>
            <a className="text-white text-[30px] font-mainFont mr-6">
                Abitur:
            </a>
            <a className="text-white/[.6] text-[30px] font-mainFont">
                2018-2021
            </a>
          </div>
          <a className="text-white/[.6] text-[30px] font-mainFont mb-6">
                Carl-Severing-Berufskolleg
            </a>
          <div className='flex flex-row justify-start'>
            <a className="text-white text-[30px] font-mainFont mr-6">
                Bachelor:   
            </a>
            <a className="text-white/[.6] text-[30px] font-mainFont">
                2021-2025
            </a>
          </div>
          <a className="text-white/[.6] text-[30px] font-mainFont">
                B.Sc. Universität Bielefeld
          </a>
          <a className="text-white/[.6] text-[30px] font-mainFont mb-6">
                Computer Science & Cognitive Systems
          </a>
          <a className="text-white text-[30px] font-mainFont">
                Interests/Hobbies:
          </a>
          <a className="text-white/[.6] text-[30px] font-mainFont">
                Programming, Fitness, Investing/Trading
          </a>
        </div>
      </div>
    </div>
    </motion.div>
    </motion.div>
  </section>
);

export default About;
