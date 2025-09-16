import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const EducationCard = ({ index, degree, institution, duration, description }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="bg-flashWhite p-10 rounded-3xl xs:w-[320px] w-full border border-platinum">
      <div className="mt-1">
        <h3 className="text-eerieBlack text-[24px] font-bold">{degree}</h3>
        <p className="text-taupe text-[16px] font-semibold" style={{ margin: 0 }}>
          {institution}
        </p>
        <p className="text-battleGray text-[14px] mt-2">{duration}</p>
        {description && (
          <p className="text-dim text-[14px] mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ index, name, issuer, description }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="bg-platinum p-8 rounded-3xl xs:w-[320px] w-full border border-silver">
      <div className="mt-1">
        <h3 className="text-eerieBlack text-[20px] font-bold">{name}</h3>
        <p className="text-taupe text-[16px] font-semibold" style={{ margin: 0 }}>
          {issuer}
        </p>
        {description && (
          <p className="text-dim text-[14px] mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  const education = [
    {
      degree: "Bachelor in Business and Information Technology (IBIT)",
      institution: "University of the Punjab",
      duration: "2018 - 2022",
      description: "Comprehensive program combining business acumen with information technology skills."
    },
    {
      degree: "Intermediate",
      institution: "Punjab College",
      duration: "2016 - 2018",
      description: "Foundation studies preparing for higher education in technology and business."
    }
  ];

  const certifications = [
    {
      name: "ISTQB Certified Tester",
      issuer: "International Software Testing Qualifications Board",
      description: "Industry-standard certification demonstrating expertise in software testing principles and practices."
    },
    {
      name: "Quality Assurance Fundamentals",
      issuer: "10 Pearls University",
      description: "Comprehensive training in quality assurance methodologies and best practices."
    }
  ];

  return (
    <div className="mt-12">
      <div className="bg-flashWhite rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px] border border-platinum">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
        </motion.div>
      </div>

      <div className="sm:px-16 px-6 sm:py-16 py-10">
        <div className="mt-20">
          <h3 className="text-taupe text-[30px] font-bold mb-10">Education</h3>
          <div className="flex flex-wrap gap-7 justify-center">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} index={index} {...edu} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-taupe text-[30px] font-bold mb-10">Certifications</h3>
          <div className="flex flex-wrap gap-7 justify-center">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} index={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
