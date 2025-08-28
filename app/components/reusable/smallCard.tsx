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
        <div className={` ${className} relative border px-[12px] py-[8px] gap-8 rounded-[16px] bg-[#1C2727] border-[#0797A0] overflow-hidden flex flex-col items-center opacity-90 justify-center pt-6 sm:pb-10 pb-6`}>
            {imageUrl ? (
                <div className="relative justify-center flex w-8 h-8 sm:w-10 sm:h-10 ">
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
            <p className="sm:text-md text-sm font-medium text-center text-white">{title}</p>
            {children}
        </div>
    )
}
