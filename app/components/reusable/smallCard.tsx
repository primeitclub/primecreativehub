"use client"

import type React from 'react'
import Image, { StaticImageData } from 'next/image'

type Smallprops = {
    title?: string,
    subtitle?: string,
    imageUrl?: any,
    children?: React.ReactNode
}

export default function SmallCard({ title, imageUrl, children }: Smallprops) {
    return (
        <div className="my-[10px]  relative border px-[12px] py-[8px]  gap-[10px]  rounded-[16px] bg-transparent border-[#0797A0] overflow-hidden flex flex-col items-center opacity-90 justify-center"> 
        <div className=' after:bg-white z-[-1] after:opacity-20 after:top-0 after:left-0 after:blur-2xl  after:absolute after:w-full after:h-full '></div>
            {imageUrl ? (
                <div className="relative justify-center flex w-8 h-8 ">
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
            <p className="text-[16px] font-medium text-center text-white">{title}</p>
            {children}
        </div>
    )
}
