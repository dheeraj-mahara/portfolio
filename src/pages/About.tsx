import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, } from "react-icons/si";
import { FaCode, FaServer, FaHandSparkles } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "React", icon: SiReact, color: "text-pink-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-purple-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-400" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
];

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const rightVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 }
  }
};

const skillContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0
  }
};

export default function About() {

  return (
    <section className="relative min-h-screen flex items-center text-white bg-[#070B1A] overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0">
        <img
          src="src/assets/aboutbg.png"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glow Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-600/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl  w-[95%] mx-auto px-4 sm:px-6 py-6 sm:py-20">

        <div className="flex flex-col lg:flex-row md:gap-14 gap-5 items-center justify-center">

          {/* LEFT */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-[45%] md:text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-orange-400 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
              About Me
            </h2>


            <p className="mt-4 text-xl lg:text-2xl font-semibold text-gray-300 flex items-center gap-2">
              <span>I'm Dheeraj, nice to meet you!</span>
              <FaHandSparkles className="text-yellow-500/90 text-xl origin-bottom-right animate-wave1 drop-shadow-lg" />

            </p>
            <p className="mt-4 text-gray-400 md:flex hidden leading-relaxed text-base lg:text-lg">
              I'm a full stack developer with a passion for building scalable web
              applications using modern tech stacks. I enjoy transforming ideas
              into real-world products.
            </p>

            {/* Skills */}


            <div className="hidden md:block mt-10">

              <motion.div
                variants={skillContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >                {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    variants={skillItem}
                    key={i}
                    className="cursor-default group relative flex items-center gap-2 px-4 py-2 rounded-xl 
  bg-white/5 border border-white/10 overflow-hidden
  transition-all duration-300 ease-out"
                  >
                    {/* Glow Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
  bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
  blur-xl transition duration-500"></div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
    translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700"></div>
                    </div>

                    {/* Content */}
                    <div className="relative flex items-center gap-2 
  group-hover:scale-105 group-hover:-translate-y-0.5 
  transition-all duration-300">
                      <Icon className={`text-lg ${skill.color} group-hover:rotate-6 transition`} />
                      <span className="text-sm text-gray-200">{skill.name}</span>
                    </div>
                  </motion.div>
                );
              })}
              </motion.div>
            </div>

          </motion.div>

          {/* RIGHT */}
          <div className="w-full lg:w-[50%]">

            <motion.div
              variants={rightVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-6 border border-white/10 rounded-3xl p-6 shadow-2xl"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-900/20 to-black/70 blur-xl"></div>
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-xl opacity-40"></div>

               <motion.img
  src="src/assets/hero.png"
  alt="profile"
  className="relative h-48 sm:h-60 lg:h-64 object-cover rounded-2xl"
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
              </div>

              {/* Content */}
              <div className="text-center sm:text-left z-10 hidden md:block ">

                <div className="tracking-wide">
                  <h3 className="text-xl lg:text-2xl text-gray-200 font-semibold">
                    <span className="text-orange-300"> 0 Years </span> Experience
                  </h3>

                  <p className="text-lg font-semibold text-gray-200">
                    Full Stack Developer
                  </p>

                  <p className="text-gray-400 text-sm py-2">
                    2026 - Present
                  </p>
                </div>

                {/* Skills box */}
                <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="mb-3 text-lg text-gray-300 font-semibold">
                    Skills
                  </h4>



                  <div className="flex justify-center sm:justify-start gap-1">

                    <div className="flex flex-wrap gap-2">

                      {/* Frontend Badge */}
                      <div className="group relative flex items-center gap-1 px-2 py-1 rounded-full 
    bg-blue-500/10 border border-blue-500/30 cursor-default 
    overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out">

                        {/* Neon Glow Outline */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent 
      group-hover:border-gradient-to-r from-blue-400 via-purple-400 to-pink-500
      transition-all duration-500"></div>

                        {/* Content */}
                        <div className="relative flex items-center gap-1 transform transition-transform 
      duration-500 group-hover:scale-100 group-hover:-translate-y-1">
                          <FaCode className="text-blue-400 text-sm group-hover:text-white transition-colors duration-500" />
                          <span className="text-xs text-blue-300 group-hover:text-white">Frontend</span>
                        </div>
                      </div>

                      {/* Backend Badge */}
                      <div className="group relative flex items-center gap-1 px-2 py-1 rounded-full 
    bg-purple-500/10 border border-purple-500/30 cursor-default 
    overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out">

                        {/* Neon Glow Outline */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent 
      group-hover:border-gradient-to-r from-purple-400 via-pink-400 to-pink-500
      transition-all duration-500"></div>

                        {/* Content */}
                        <div className="relative flex items-center gap-1 transform transition-transform 
      duration-500 group-hover:scale-100 group-hover:-translate-y-1">
                          <FaServer className="text-purple-400 text-sm group-hover:text-white transition-colors duration-500" />
                          <span className="text-xs text-purple-300 group-hover:text-white">Backend</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </motion.div>

            <div className="md:hidden  mt-6 flex-col items-center flex justify-center sm:justify-start gap-2 flex-wrap">
              <p className="text-gray-300 self-start pl-4 pb-1">Profile Developer</p>
              <div className="flex w-full justify-around">
                <span className="px-7 font-bold py-2 bg-blue-500/20 rounded-full text-sm">
                  Tailwind
                </span>
                <span className="px-7 font-bold py-2 bg-purple-500/20 rounded-full text-sm">
                  React
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section >
  );
}