'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {staggerContainer, textVariant } from '../utils/motion';

const Skills = () => (
  <section >
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <motion.div variants={textVariant(0.3)} className="">
      <div className='flex flex-col pt-[110px]' id="Skills">
        <div className='flex flex-col items-center'>
          <a className='text-white font-mainFont text-[50px]'> Skills</a>
          <a className='text-white/[.6] font-mainFont text-[25px] mb-14'> self assessment</a>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col python-libaries'>
            <a className='text-white font-mainFont text-[40px] mb-6'> Python Libaries</a>
            <div className='flex flex-row items-center justify-between mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Numpy</a>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                  <rect x="92" y="2" width="145" height="40" rx="20" stroke="white" stroke-width="4"/>
                  <rect x="2" y="2" width="128" height="40" rx="20" fill="#62C400" stroke="white" stroke-width="4"/>
                  <text x="40" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>50%</text>
                </svg>
              </div>
            </div>
            <div className='flex flex-row justify-between items-center mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Pandas</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="92" y="2" width="145" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="165" height="40" rx="20" fill="#62C400" stroke="white" stroke-width="4"/>
                <text x="60" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>70%</text>
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Scikit-Learn</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="52" y="2" width="185" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="120" height="40" rx="20" fill="#62C400" stroke="white" stroke-width="4"/>
                <text x="35" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>40%</text>
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Tensorflow</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="52" y="2" width="185" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="100" height="40" rx="20" fill="#62C400" stroke="white" stroke-width="4"/>
                <text x="25" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>30%</text>
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Matplotlib</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="92" y="2" width="145" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="128" height="40" rx="20" fill="#62C400" stroke="white" stroke-width="4"/>
                <text x="40" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>50%</text>
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center space-x-8'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Backtesting.py</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="92" y="2" width="145" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="200" height="40" rx="20" fill="#62C400" stroke="white" stroke-width="4"/>
                <text x="80" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>90%</text>
              </svg>
            </div>
          </div>
          <div className='flex flex-col web-libaries'>
            <a className='text-white font-mainFont text-[40px] mb-6'> Web Libaries</a>
            <div className='flex flex-row justify-between items-center mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Next.js</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="52" y="2" width="185" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="100" height="40" rx="20" fill="#F04141" stroke="white" stroke-width="4"/>
                <text x="25" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>30%</text>
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center mb-6 space-x-8'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> HTML/CSS </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="92" y="2" width="145" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="150" height="40" rx="20" fill="#F04141" stroke="white" stroke-width="4"/>
                <text x="52" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>60%</text>
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> D3.js</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="52" y="2" width="185" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="100" height="40" rx="20" fill="#F04141" stroke="white" stroke-width="4"/>
                <text x="25" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>30%</text>
              </svg>
            </div>
            <a className='text-white font-mainFont text-[40px] mb-6'> Other</a>
            <div className='flex flex-row justify-between items-center mb-6'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> cTrader </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="92" y="2" width="145" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="150" height="40" rx="20" fill="#ECAE35" stroke="white" stroke-width="4"/>
                <text x="52" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>60%</text>
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <a className='text-white/[.6] font-mainFont text-[40px]'> Photoshop </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="239" height="44" viewBox="0 0 239 44" fill="none">
                <rect x="92" y="2" width="145" height="40" rx="20" stroke="white" stroke-width="4"/>
                <rect x="2" y="2" width="150" height="40" rx="20" fill="#ECAE35" stroke="white" stroke-width="4"/>
                <text x="52" y="30" fill="white" fontSize={25} fontFamily='mainFont' fontWeight={800} opacity={0.5}>60%</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      </motion.div>
  </section>
);

export default Skills;
