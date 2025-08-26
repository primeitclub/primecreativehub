"use client"

import type React from 'react'
import Image, { StaticImageData } from 'next/image'

type Smallprops = {
    title?: string,
    subtitle?: string,
    imageUrl?: string | StaticImageData,
    children?: React.ReactNode
}

export default function SmallCard({ title, imageUrl, children }: Smallprops) {
    return (
        <div className="my-[10px] border p-[20px_24px_35px_24px] w-[210px] h-[140px] gap-[10px] rounded-[16px] bg-[#1C2727] border-[#0797A0] flex flex-col items-center justify-center"> 
            {imageUrl ? (
                <div className="relative w-16 h-16 mb-2">
                    <Image
                        src={imageUrl}
                        alt={title || "image"}
                        fill
                        sizes="64px"
                        className="object-contain"
                    />
                </div>
            ) : (
                <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#0797A0] rounded-full opacity-50"></div>
                </div>
            )}
            <p className="text-[18px] font-medium text-center text-white">{title}</p>
            {children}
        </div>
    )
}