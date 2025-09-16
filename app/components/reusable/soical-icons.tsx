'use client';

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-6 text-white">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/insta.svg"
          alt="Instagram"
          className="w-[30px] md:w-[4vw] lg:w-[2.2svw] 2xl:w-[40px] object-contain"
        />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/github.svg"
          alt="GitHub"
          className="w-[30px] md:w-[4vw] lg:w-[2.2svw] 2xl:w-[40px] object-contain"
        />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/linkedin.svg"
          alt="LinkedIn"
          className="w-[30px] md:w-[4vw] lg:w-[2.2svw] 2xl:w-[40px] object-contain"
        />
      </a>
    </div>
  );
}
