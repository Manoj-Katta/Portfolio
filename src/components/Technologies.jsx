import { DiRedis } from "react-icons/di";
import { FaJava, FaNode, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiGradle, SiMongodb, SiRedux, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiMysql, SiApachekafka, SiJenkins, SiBitbucket, SiGrafana, SiPostman, SiSpringboot, SiBootstrap,} from "react-icons/si";
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

        {/* Programming Languages */}
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="tech-card" title="C++">
          <SiCplusplus className="text-7xl text-blue-600" />
          <span className="mt-2 text-sm">C++</span>
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="tech-card" title="Python">
          <FaPython className="text-7xl text-yellow-400" />
          <span className="mt-2 text-sm">Python</span>
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="tech-card" title="JavaScript">
          <SiJavascript className="text-7xl text-yellow-500" />
          <span className="mt-2 text-sm">JavaScript</span>
        </motion.div>

        {/* Web Development */}
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="tech-card" title="HTML5">
          <SiHtml5 className="text-7xl text-orange-600" />
          <span className="mt-2 text-sm">HTML</span>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="tech-card" title="CSS3">
          <SiCss3 className="text-7xl text-blue-500" />
          <span className="mt-2 text-sm">CSS</span>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="tech-card" title="Bootstrap">
          <SiBootstrap className="text-7xl text-purple-600" />
          <span className="mt-2 text-sm">Bootstrap</span>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="tech-card" title="Spring Boot">
          <SiSpringboot className="text-7xl text-green-600" />
          <span className="mt-2 text-sm">Spring Boot</span>
        </motion.div>

        {/* Databases */}
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="tech-card" title="MySQL">
          <SiMysql className="text-7xl text-blue-600" />
          <span className="mt-2 text-sm">MySQL</span>
        </motion.div>

        {/* Messaging & Queues */}
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="tech-card" title="Kafka">
          <SiApachekafka className="text-7xl text-black" />
          <span className="mt-2 text-sm">Kafka</span>
        </motion.div>

        {/* DevOps & Monitoring */}
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="tech-card" title="Jenkins">
          <SiJenkins className="text-7xl text-red-600" />
          <span className="mt-2 text-sm">Jenkins</span>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="tech-card" title="Bitbucket">
          <SiBitbucket className="text-7xl text-blue-500" />
          <span className="mt-2 text-sm">Bitbucket</span>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="tech-card" title="Grafana">
          <SiGrafana className="text-7xl text-orange-500" />
          <span className="mt-2 text-sm">Grafana</span>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="tech-card" title="Postman">
          <SiPostman className="text-7xl text-orange-400" />
          <span className="mt-2 text-sm">Postman</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
