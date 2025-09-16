import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <div className="mt-10 flex flex-col gap-6 font-poppins">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-taupe rounded-full flex items-center justify-center">
              <span className="text-jet text-sm font-bold">@</span>
            </div>
            <a href="mailto:Tahreemkhannn@gmail.com" className="text-timberWolf font-medium">Tahreemkhannn@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-taupe rounded-full flex items-center justify-center">
              <span className="text-jet text-sm font-bold">in</span>
            </div>
            <a href="https://linkedin.com/in/tahreem-fatima1/" target="_blank" rel="noopener noreferrer" className="text-timberWolf font-medium">linkedin.com/in/tahreem-fatima1/</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-taupe rounded-full flex items-center justify-center">
              <span className="text-jet text-sm font-bold">📞</span>
            </div>
            <a href="tel:+923094398584" className="text-timberWolf font-medium">(+92) 3094398584</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
