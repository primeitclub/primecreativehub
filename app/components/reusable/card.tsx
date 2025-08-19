"use client"

type CardProps = {
  title: string      
  subtitle: string   
  imageUrl?: string
  children?: React.ReactNode
}

export default function Card({ title, subtitle, imageUrl, children }: CardProps) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <h1 className="card-title">{title}</h1>
      <h2 className="card-subtitle">{subtitle}</h2>
      {children && <div className="card-children">{children}</div>}
    </div>
  )
}
