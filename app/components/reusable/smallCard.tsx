"use client"

import type React from 'react'
import Image, { StaticImageData } from 'next/image'

type Smallprops = {
    title?: string,
    subtitle?: string,
    imageUrl?: any,
    className?: string,
    children?: React.ReactNode
}

export default function SmallCard({ title, imageUrl, children, className }: Smallprops) {
    return (
        <div className={` ${className} relative border px-[12px] gap-6 rounded-[16px] bg-[#1C2727] border-[#0797A0] overflow-hidden flex flex-col items-center opacity-90 justify-center pt-4 sm:pb-2 pb-6 lg:h-[145px] 2xl:h-[170px]`}>
            {imageUrl ? (
                <div className="relative justify-center flex w-8 h-8 2xl:w-10 2xl:h-10 ">
                    <Image
                        src={imageUrl}
                        alt={title || "image"}
                        fill
                        className="object-contain"
                    />
                </div>
            ) : (
                <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#0797A0] rounded-full "></div>
                </div>
            )}
            <p className="2xl:text-[17px] md:text-[16px] text-sm font-medium text-center text-white leading-6">{title}</p>
            {children}
        </div>
    )
}
