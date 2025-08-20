'use client';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-[20px] mt-[10px] text-subtitle">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-[40px] h-[40px]" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-[40px] h-[40px]" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-[40px] h-[40px]"/>
      </a>
    </div>
  );
}
