import RushiProfile from "../assets/RushiProfile.jpg";
import { HERO_CONTENT } from "../constants/index.js";
import { motion, stagger } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVaiants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="fles justify-center lg:p-8">
            <motion.img
              src={RushiProfile}
              alt="Rushi"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h2
              variants={childVaiants}
              className="mt-9 pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Rushikesh Dhamanage
            </motion.h2>
            <motion.span
              variants={childVaiants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 
            bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVaiants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed 
              tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVaiants}
              href="/Rushikesh_Frontend_Dev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 transition-all 
              transform hover:bg-stone-950 hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
