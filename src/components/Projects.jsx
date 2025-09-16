import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="bg-flashWhite p-6 rounded-xl border border-platinum">
      <div>
        <h3 className="text-eerieBlack text-[20px] font-bold mb-2">{name}</h3>
        <p className="text-dim text-[14px] leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] px-3 py-1 rounded-full bg-platinum text-taupe font-medium`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Quality Assurance Work</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects showcase my expertise in software quality assurance,
          testing methodologies, and automation frameworks. Each project demonstrates
          practical application of QA best practices and tools in real-world scenarios.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
