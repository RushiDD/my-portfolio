import {
  RiJavaFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiReactjsLine,
} from "react-icons/ri";
import {
  SiTypescript,
  SiVite,
  SiRedux,
  SiSpringboot,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 transition-all"
        >
          <RiReactjsLine className="text-6xl" style={{ color: "#61DAFB" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 transition-all"
        >
          <RiNodejsFill className="text-6xl" style={{ color: "#339933" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 transition-all"
        >
          <RiJavascriptFill className="text-6xl" style={{ color: "#F7DF1E" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 transition-all"
        >
          <SiHtml5 className="text-5xl" style={{ color: "#E34F26" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 transition-all"
        >
          <SiCss3 className="text-5xl" style={{ color: "#1572B6" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 transition-all"
        >
          <RiJavaFill className="text-6xl" style={{ color: "#007396" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 transition-all"
        >
          <SiTypescript className="text-5xl" style={{ color: "#3178C6" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 transition-all"
        >
          <SiVite className="text-5xl" style={{ color: "#646CFF" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 transition-all"
        >
          <SiRedux className="text-5xl" style={{ color: "#764ABC" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 transition-all"
        >
          <SiSpringboot className="text-5xl" style={{ color: "#6DB33F" }} />
        </motion.div>
      </motion.div>
    </div>
  );
}
