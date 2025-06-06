import { DiRedis } from "react-icons/di";
import { FaJava, FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiGradle, SiMongodb, SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >

        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="React"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="mt-2 text-sm">React</span>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="Next.js"
        >
          <TbBrandNextjs className="text-7xl" />
          <span className="mt-2 text-sm">Next.js</span>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="Node.js"
        >
          <FaNode className="text-7xl text-green-500" />
          <span className="mt-2 text-sm">Node.js</span>
        </motion.div>

        {/* Express */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="Express"
        >
          <SiExpress className="text-7xl" />
          <span className="mt-2 text-sm">Express</span>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <span className="mt-2 text-sm">MongoDB</span>
        </motion.div>

        {/* Redux */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="Redux"
        >
          <SiRedux className="text-7xl text-violet-500" />
          <span className="mt-2 text-sm">Redux</span>
        </motion.div>

        {/* Java */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="Java"
        >
          <FaJava className="text-7xl text-[#007396]" />
          <span className="mt-2 text-sm">Java</span>
        </motion.div>

        {/* Gradle */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="Gradle"
        >
          <SiGradle className="text-7xl text-green-600" />
          <span className="mt-2 text-sm">Gradle</span>
        </motion.div>

        {/* Redis */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
          title="Redis"
        >
          <DiRedis className="text-7xl text-red-600" />
          <span className="mt-2 text-sm">Redis</span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
