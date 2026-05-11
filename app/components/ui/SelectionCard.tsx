import NextImage, { StaticImageData } from "next/image";

interface SelectionCardProps {
  image: StaticImageData | string;
  background?: string;
}

export default function SelectionCard({ image, background = "bg-linear-to-br from-sky-200 to-sky-800" }: SelectionCardProps) {
  return (
    <div className="relative w-80 perspective-dramatic group cursor-pointer">
      <div className={`w-80 h-96 rounded-lg shadow-md ${background} relative overflow-hidden group-hover:rotate-y-3 transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] duration-300`}>
      </div>

      <NextImage
        src={image}
        alt="Shoe"
        className="absolute top-24 -right-8 w-80 h-auto object-contain z-10 drop-shadow-xl rotate-z-12 group-hover:scale-105 group-hover:rotate-y-3 transition-all ease-in-out duration-400"
        width={320}
        height={384}
      />
    </div>
  );
}