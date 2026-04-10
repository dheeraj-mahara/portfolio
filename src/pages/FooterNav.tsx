import { motion } from "framer-motion";
import { FaHome, FaUser, FaBriefcase, FaBolt, FaPhone } from "react-icons/fa";

const footerVariant = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

export default function FooterNav() {
  return (
    <motion.nav
      variants={footerVariant}
      initial="hidden"
      animate="show"
      className="fixed bottom-2 left-0 right-0 flex md:hidden justify-center z-50"
    >
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08 }}
        className="w-[95%] max-w-md backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2 flex justify-between items-center"
      >
        <a href="#home">
          <motion.button
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-gray-300 hover:text-white text-sm"
          >
<FaHome size={18}/>         
            <span>Home</span>
          </motion.button>
        </a>

        <a href="#about">
          <motion.button
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-gray-300 hover:text-white text-sm"
          >
            <FaUser size={18} />
            <span>About</span>
          </motion.button>
        </a>

        <a href="#projects">
          <motion.button
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-gray-300 hover:text-white text-sm"
          >
            <FaBriefcase size={18} />
            <span>Projects</span>
          </motion.button>
        </a>

        <a href="#skills">
          <motion.button
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-gray-300 hover:text-white text-sm"
          >
            <FaBolt size={18} />
            <span>Skills</span>
          </motion.button>
        </a>

        <a href="#contact">
          <motion.button
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-gray-300 hover:text-white text-sm"
          >
            <FaPhone size={18} />
            <span>Contact</span>
          </motion.button>
        </a>
      </motion.div>
    </motion.nav>
  );
}