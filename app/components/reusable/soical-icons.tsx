'use client';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-[38px] mt-[14px] text-subtitle">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
    </div>
  );
}
