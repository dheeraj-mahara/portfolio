
import { motion } from "framer-motion";
export default function Nav() {
  const navVariant = {
    hidden: { y: -80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const itemVariant = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="show"
      className="fixed top-1 md:top-1 left-0 right-0 z-50 flex justify-center"
    >
      <div className="w-[95%] max-w-7xl  backdrop-blur-xl  border border-white/10 rounded-2xl  px-6 md:py-3  flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-white">

          <a href="#home">DHEERAJ</a>
        </h1>

        {/* DESKTOP MENU */}
        <motion.ul
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          className="hidden md:flex gap-8 text-gray-300 font-medium">



          <motion.li
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer relative group"
          >
            <a href="#home">Home</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.li>


          <motion.li
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer relative group"
          >
            <a href="#about">About</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.li>

          <motion.li
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer relative group"
          >
            <a href="#projects">Projects</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.li>

          <motion.li
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer relative group"
          >
            <a href="#skills">Skills</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.li>



          <motion.li
            variants={itemVariant}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer relative group"
          >
            <a href="#contact">Contact</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.li>







        </motion.ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-3">

          {/* <button className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10">
            🔍
          </button> */}

          <button className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10">
            <img src="src\assets\d1.png" alt="" />
          </button>

        </div>

      </div>


    </motion.nav >
  );
}