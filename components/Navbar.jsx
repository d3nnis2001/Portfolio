'use client';

import { motion } from "framer-motion"

import styles from "../styles"
import {navVariants} from "../utils/motion"

const Navbar = () => (
  <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}>
      <div className={`${styles.innerWidth} mx-auto flex justify-start gap-32 ml-16`}>
        <a href="#" class="group font-thin text-[30px] text-white transition duration-300">
          About Me
          <span class="block max-w-0 group-hover:max-w-[157px] transition-all duration-500 h-0.5 bg-white"></span>
        </a>
        <a href="#" class="group font-thin text-[30px] text-white transition duration-300">
          Skills
          <span class="block max-w-0 group-hover:max-w-[157px] transition-all duration-500 h-0.5 bg-white"></span>
        </a>
        <a href="#" class="group font-thin text-[30px] text-white transition duration-300">
          Projects
          <span class="block max-w-0 group-hover:max-w-[157px] transition-all duration-500 h-0.5 bg-white"></span>
        </a>
        <a href="#" class="group font-thin text-[30px] text-white transition duration-300">
          Contact Me
          <span class="block max-w-0 group-hover:max-w-[190px] transition-all duration-500 h-0.5 bg-white"></span>
        </a>
      </div>
  </motion.nav>
);

export default Navbar;
