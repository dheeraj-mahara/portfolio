import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 }
  }
};

const heading = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 }
};
export default function Projects() {
  const [active, setActive] = useState("All");
  return (

    <section className="relative min-h-screen bg-[#070B1A] text-white overflow-hidden py-6  md:py-16 sm:py-20">

      {/* background glow */}
      <div className="absolute inset-0">
        <img
          src="src/assets/projectbg.png"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-20 left-10 w-52 sm:w-72 h-52 sm:h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 sm:w-72 h-52 sm:h-72 bg-pink-600/20 blur-[120px] rounded-full"></div>

      <div className="relative w-[95%] max-w-7xl mx-auto px-2 sm:px-4">

        {/* Heading */}
        <motion.div
          variants={heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl pb-1 font-bold bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
              My Projects
            </h2>

            <p className="text-gray-300 mt-1 text-sm sm:text-base">
              Some of the recent work I've done
            </p>
          </div>



          <div className="md:flex hidden flex-wrap justify-start md:justify-center items-center gap-4 rounded-2xl px-4 py-3 bg-black/20 border border-gray-500/40 w-fit h-fit self-end">



            <button
              onClick={() => {
                setActive("All");

              }} className={` cursor-pointer relative px-6 py-1 rounded-2xl text-white text-sm sm:text-base font-semibold border border-gray-700 bg-black overflow-hidden 
          before:absolute before:top-0 before:left-[-100%] before:w-1/2 before:h-full before:bg-gradient-to-r before:from-cyan-400 before:to-purple-600 before:skew-x-12 before:transition-all before:duration-500 
          hover:before:left-full
          ${active === "All" ? "bg-gradient-to-r from-black/30 via-pink-700 to-blue-800 animate-gradientShift" : ""}
        `}
            >
              All
            </button>

            <button
              onClick={() => { setActive("Web") }}
              className={` cursor-pointer  relative px-6 py-1 rounded-2xl text-white text-sm sm:text-base font-semibold border border-gray-700 bg-black overflow-hidden 
          before:absolute before:top-0 before:left-[-100%] before:w-1/2 before:h-full before:bg-gradient-to-r before:from-cyan-400 before:to-purple-600 before:skew-x-12 before:transition-all before:duration-500 
          hover:before:left-full
          ${active === "Web" ? "bg-gradient-to-r from-black/30 via-pink-700 to-blue-800 animate-gradientShift" : ""}
        `}
            >
              Web
            </button>

            <button
              onClick={() => setActive("App")}
              className={`cursor-pointer relative px-6 py-1 rounded-2xl text-white text-sm sm:text-base font-semibold border border-gray-700 bg-black overflow-hidden 
          before:absolute before:top-0 before:left-[-100%] before:w-1/2 before:h-full before:bg-gradient-to-r before:from-cyan-400 before:to-purple-600 before:skew-x-12 before:transition-all before:duration-500 
          hover:before:left-full
          ${active === "App" ? "bg-gradient-to-r from-black/30 via-pink-700 to-blue-800 animate-gradientShift" : ""}
        `}
            >
              App
            </button>

          </div>



        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Card */}
          {[
            { img: "portfolio.png", title: "Portfolio Website", tech: "React / TypeScript / Tailwind", category: "Web", link: "", github: "" },
            { img: "chat.png", title: "Chat Application", tech: "React / Next.js / Socket.io", category: "App", link: "https://chat-vibe-theta.vercel.app", github: "https://github.com/dheeraj-mahara/ChatappFrountend" },
            { img: "snake.png", title: "Snake Game", tech: "JavaScript / HTML / CSS", category: "Web", link: "https://69d72a6a29518ead87b8c6df--dsnake-leader.netlify.app/", github: "https://github.com/dheeraj-mahara/DheerajMahara" },
          ].filter(p => active === "All" || p.category === active)
            .map((project, i) => (

              <motion.div
                key={i}
                variants={card}
                whileHover={{
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-2xl"
              >
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-sky-400 to-pink-500 rounded-2xl blur-sm"></div> */}

                {/* Card content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-black/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-pink-500/40 transition-all duration-300"
                >                <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={`src/assets/${project.img}`}
                    alt="project"
                    className="rounded-xl mb-4 border-2 border-black w-full max-w-lg mx-auto h-auto object-contain"
                  />

                  <h3 className="text-lg sm:text-xl font-semibold text-pink-200 mt-2 ">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1 ">
                    {project.tech}
                  </p>



                  <div className="flex justify-center flex-wrap gap-6 mt-8">

                    <button
                      onClick={() => window.open(project.link, "_blank")} // opens the project link in a new tab
                      className="cursor-pointer relative w-[40%] py-1 px-4 rounded-lg text-white text-sm bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 overflow-hidden group"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-300">
                        Live Demo
                      </span>
                      <span className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-150 transition-transform duration-500 origin-center"></span>
                      <span className="absolute -left-62 top-0 w-62 h-full bg-gradient-to-r from-yellow-300 via-white/50 to-yellow-300 opacity-30 transform -skew-x-12 translate-x-0 group-hover:translate-x-96 transition-transform duration-700"></span>
                    </button>



                    {/* Github Button */}
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="cursor-pointer relative w-[40%] py-1 px-4 rounded-lg text-white text-sm bg-gray-900 border border-gray-700 overflow-hidden group"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-green-400">
                        Github
                      </span>
                      <span className="absolute inset-0 bg-white/5 rounded-xl scale-0 group-hover:scale-150 transition-transform duration-500 origin-center"></span>
                      <span className="absolute -left-62 top-0 w-62 h-full bg-gradient-to-r from-green-400 via-white/50 to-green-400 opacity-20 transform -skew-x-12 translate-x-0 group-hover:translate-x-96 transition-transform duration-700"></span>
                    </button>

                  </div>

                </motion.div>
              </motion.div>
            ))}

        </motion.div>

      </div>

    </section>
  );
}