import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
      className="bg-flashWhite px-4 py-3 rounded-lg border border-platinum ">
      <p className="text-eerieBlack text-[16px] font-medium text-center">
        {skill.name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  // Group technologies by category
  const testingTools = technologies.filter(tech =>
    ['Playwright', 'Postman', 'TestRail', 'JIRA', 'Swagger', 'Gatling'].includes(tech.name)
  );

  const testingTypes = technologies.filter(tech =>
    ['Manual Testing', 'Automation Testing', 'API Testing', 'Load Testing', 'Regression Testing'].includes(tech.name)
  );

  const otherSkills = technologies.filter(tech =>
    ['SQL', 'Git', 'Agile Methodologies'].includes(tech.name)
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My Expertise</p>
        <h2 className={styles.sectionHeadTextLight}>Skills & Technologies.</h2>
      </motion.div>

      <div className="mt-14 space-y-10">
        {/* Testing Tools */}
        <div>
          <h3 className="text-timberWolf text-[24px] font-bold mb-6">Testing Tools & Frameworks</h3>
          <div className="flex flex-wrap gap-4">
            {testingTools.map((technology, index) => (
              <SkillCard key={technology.name} skill={technology} index={index} />
            ))}
          </div>
        </div>

        {/* Testing Types */}
        <div>
          <h3 className="text-timberWolf text-[24px] font-bold mb-6">Testing Methodologies</h3>
          <div className="flex flex-wrap gap-4">
            {testingTypes.map((technology, index) => (
              <SkillCard key={technology.name} skill={technology} index={index} />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-timberWolf text-[24px] font-bold mb-6">Additional Skills</h3>
          <div className="flex flex-wrap gap-4">
            {otherSkills.map((technology, index) => (
              <SkillCard key={technology.name} skill={technology} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
