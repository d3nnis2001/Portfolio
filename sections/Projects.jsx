'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {staggerContainer, textVariant } from '../utils/motion';


const Project = () => (
  <section>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
    <motion.div variants={textVariant(0.4)} className="">
    <div className='flex flex-col pt-[110px]' id="Projects">
      <div className='flex flex-col items-center'>
        <a className='text-white font-mainFont text-[50px]'> Projects</a>
        <a className='text-white/[.6] font-mainFont text-[25px] mb-14'>For Fun</a>
      </div>
      <div className='flex flex-col mt-10'>
        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col items-center'>
          <motion.div className="demo" whileHover={{scale: 1.02}}>
            <svg width="551" height="519" viewBox="0 0 551 519" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="547" height="515" rx="38" stroke="white" stroke-width="4"/>
            </svg >
            </motion.div>
            <div className='flex flex-row mt-10'>
              <div className='flex pr-8'>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="38" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Github</text>
                </svg>
              </div>
              <div>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="35" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Medium</text>
                </svg>  
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center'>
          <motion.div className="demo" whileHover={{scale: 1.02}}>
            <svg width="551" height="519" viewBox="0 0 551 519" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="547" height="515" rx="38" stroke="white" stroke-width="4"/>
            </svg >
            </motion.div>
            <div className='flex flex-row mt-10'>
              <div className='flex pr-8'>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="38" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Github</text>
                </svg>
              </div>
              <div>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="35" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Medium</text>
                </svg>  
              </div>
            </div>
          </div>
      </div>
      <div className='flex flex-row justify-evenly mt-10'>
          <div className='flex flex-col items-center'>
          <motion.div className="demo" whileHover={{scale: 1.02}}>
            <svg width="551" height="519" viewBox="0 0 551 519" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="547" height="515" rx="38" stroke="white" stroke-width="4"/>
            </svg >
            </motion.div>
            <div className='flex flex-row mt-10'>
              <div className='flex pr-8'>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="38" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Github</text>
                </svg>
              </div>
              <div>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="35" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Medium</text>
                </svg>  
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center'>
          <motion.div className="demo" whileHover={{scale: 1.02}}>
            <svg width="551" height="519" viewBox="0 0 551 519" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="547" height="515" rx="38" stroke="white" stroke-width="4"/>
            </svg >
            </motion.div>
            <div className='flex flex-row mt-10'>
              <div className='flex pr-8'>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="38" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Github</text>
                </svg>
              </div>
              <div>
                <svg width="141" height="64" viewBox="0 0 141 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="138" height="61" rx="30.5" stroke="white" stroke-width="3"/>
                  <text x="35" y="38" fill="white" fontSize={20} fontFamily='mainFont' fontWeight={400}>Medium</text>
                </svg>  
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    </motion.div>
    </motion.div>
  </section>
);

export default Project;
