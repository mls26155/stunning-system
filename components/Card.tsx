import Image from "next/image"

interface CardProps {
  name: string;
  tagline: string;
  imageSource?: string;
}

const Card = ({ name, tagline, imageSource }: CardProps) => {
  return (
    <div className="border-slate-600 border-2 rounded-xl shadow-xl p-6 max-w-sm m-1 text-center dispaly: inline-block space-y-2 bg-white text-black">
        {imageSource && <Image 
            className="rounded-full border-8 border-orange-300"
            src={imageSource}
            width={200}
            height={200}
            alt="yuya"
        />}
        <h2 className="text-xl font-bold text-slate-900">{name}</h2>
        <p className="text-slate-800">{tagline}</p>
    </div>
  )
}

Card.defaultProps = {
  name: "Blank",
  tagline: "Blank",
  imageSource: "/200x200.svg",
}

export default Card