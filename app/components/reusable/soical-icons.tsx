'use client';

import {  FaGithub } from 'react-icons/fa';
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";
export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-6 mb-5 text-white">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <PiInstagramLogoFill className="social-icon text-[30px] md:text-[4vw] lg:text-[2.2svw] 2xl:text-[56px]" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon text-[30px] md:text-[4vw] lg:text-[2.2svw] 2xl:text-[56px]" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <TbBrandLinkedinFilled className="social-icon text-[30px] md:text-[4vw] lg:text-[2.2svw] 2xl:text-[56px]" />
      </a>
    </div>
  );
}
