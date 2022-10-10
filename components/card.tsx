import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface CardProps {
  setOnHover: (index: number) => void;
  onHover: number;
  index: number;
  name: string;
  image: StaticImageData;
  path: string;
}

const Card = ({ setOnHover, onHover, index, name, image, path }: CardProps) => {
  return (
    <Link href={path}>
      <a>
        <motion.div
          whileHover={{ scale: 1.08, y: -10 }}
          className={
            (onHover !== -1 && onHover !== index && "grayscale ") +
            " sm:w-60 h-80 bg-white rounded-3xl text-white text-2xl flex flex-col justify-end hover:shadow-lg  duration-150"
          }
          onHoverStart={() => setOnHover(index)}
          onHoverEnd={() => setOnHover(-1)}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-28 flex flex-col justify-end rounded-b-3xl bg-gradient-to-b from-[#ffffff00] to-[#000000d3]  px-5 py-8">
            <h1 className="font-bold">{name}</h1>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default Card;