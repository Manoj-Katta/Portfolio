import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projects = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={220}
                height={220}
                alt={project.title}
                className="mb-6 rounded"
              ></img>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
              <div className="text-purple-600 m-2 flex-col">
                {project.github && (
                  <h6 className="flex">
                    Github Repo:
                    <div
                      className="p-1"
                      onClick={() => handleRedirect(project.github)}
                    >
                      <FaGithub />
                    </div>
                  </h6>
                )}
                {project.website && (
                  <h6 className="flex">
                    Website:
                    <div
                      className="p-1"
                      onClick={() => handleRedirect(project.website)}
                    >
                      <FaGlobe />
                    </div>
                  </h6>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
