"use client"

type CardProps = {
  subtitle: string
  imageUrl?: any 
  children?: React.ReactNode
}

export default function Card({ subtitle, imageUrl, children }: CardProps) {
  return (
    <div className="w-[235px] h-[164px] px-[24px] pt-[20px] pb-[35px] rounded-[16px] border border-[#0797A0] bg-white flex flex-col items-center">
      {imageUrl && (
        <img
          src={imageUrl.src || imageUrl}
          alt="Card image"
          className="w-[40px] h-[40px] rounded-md mb-4"
        />
      )}
      <h2 className="text-sm text-gray-600 text-center">{subtitle}</h2>
      {children && <div className="mt-3">{children}</div>}
    </div>
  )
}
