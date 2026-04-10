import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaPaintBrush, FaSketch } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiExpress, SiMongodb, SiSocketdotio, SiMysql, SiFigma, } from "react-icons/si";
import frountendImg from "../assets/frountend.png";
import backendImg from "../assets/backend.png";
import skillBg from "../assets/skillbg.png";

import { motion } from "framer-motion";
const leftCard = {
    hidden: { opacity: 0, x: -80 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7 }
    }
};

const rightCard = {
    hidden: { opacity: 0, x: 80 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7 }
    }
};

const badgeContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const badgeItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1
    }
};

export default function Skill() {
    const frountendskills = [
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Redux", icon: <FaReact className="text-purple-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "UI Design", icon: <SiFigma className="text-pink-400" /> },
        { name: "Painting", icon: <FaPaintBrush className="text-blue-400" /> },
        { name: "Sketching", icon: <FaSketch className="text-yellow-500" /> },

    ];

    return (
        <section className="relative min-h-screen bg-[#070B1A] text-white overflow-hidden py-6  md:py-4 sm:py-20">

            {/* Background Image */}

            <div className="absolute inset-0">
                <img
                    src={skillBg}
                    alt="bg"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Glow Effects */}
            <div className="absolute top-20 left-10 w-52 sm:w-72 h-52 sm:h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-52 sm:w-72 h-52 sm:h-72 bg-pink-600/20 blur-[120px] rounded-full"></div>

            <div className="relative w-[95%] max-w-7xl mx-auto px-2 sm:px-4">

                {/* Header */}
                <div className="max-w-6xl mx-auto mb-2">
                    <h1 className="text-4xl font-semibold mb-4">
                        <span className="text-pink-400">My</span>{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-sky-400 text-transparent bg-clip-text">
                            Skills
                        </span>
                    </h1>

                    <p className="text-gray-300 max-w-full md:max-w-[40%]">
                        Here are the key technologies and tools I use to build modern and scalable web applications.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 pt-4 md:pt-0    ">

                    {/* Frontend */}
                    <motion.div
                        variants={leftCard}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:p-6"
                    >                        <h2 className="text-2xl font-semibold mb-3 pl-3">
                            <motion.span
                                variants={badgeItem} className="bg-gradient-to-r from-pink-300 to-white text-transparent bg-clip-text">
                                Frontend Skills
                            </motion.span>
                        </h2>

                        <div className="bg-white/10 rounded-2xl md:p-5 p-2 border border-sky-300/40 outline-none mt-4
                                         shadow-[0_0_5px_rgba(56,189,248,0.6)]     transition duration-300     shadow-[0_-8px_12px_rgba(56,189,248,0.35)]     hover:shadow-[0_0_18px_rgba(56,189,248,0.55)]">
                            <div className="flex flex-row items-center gap-5">

                                <div className="w-[40%]">
                                    <img
                                        src={frountendImg}
                                        alt="Frontend"
                                        className="rounded-lg object-cover w-full"
                                    />
                                </div>

                                <div className="w-[60%] text-left">
                                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-white text-transparent bg-clip-text">
                                        Frontend Skills
                                    </h3>

                                    <p className="text-gray-300 md:text-sm text-xs mb-4">
                                        Tailwind CSS, TypeScript, React, Redux, JavaScript
                                    </p>
                                </div>

                            </div>

                            <motion.div
                                variants={badgeContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap justify-center md:justify-start gap-3 md:mt-4"
                            >                                {frountendskills.map((item) => (
                                <span
                                    key={item.name}
                                    className="flex cursor-default  items-center gap-2 md:px-3 px-2 py-1 text-xs rounded-full bg-pink-600/20 border border-pink-400/40 hover:bg-pink-500/30 transition"
                                >
                                    {item.icon}
                                    {item.name}
                                </span>
                            ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        variants={rightCard}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:p-6"
                    >                       <h2 className="text-2xl font-semibold mb-3 pl-3">
                            <motion.span
                                variants={badgeItem} className="bg-gradient-to-r from-pink-300 to-white text-transparent bg-clip-text">
                                Backend Skills
                            </motion.span>
                        </h2>

                        <div className="bg-white/10 rounded-2xl md:p-5 p-2 border border-sky-300/40 outline-none mt-4 shadow-[0_0_5px_rgba(56,189,248,0.6)]  transition duration-300  shadow-[0_-8px_12px_rgba(56,189,248,0.35)]  hover:shadow-[0_0_18px_rgba(56,189,248,0.55)]">
                            <div className="flex flex-row items-center gap-5">

                                
                                 <div className="w-[40%]">
                                    <img
                                        src={backendImg}
                                        alt="Frontend"
                                        className="rounded-lg object-cover w-full"
                                    />
                                </div>

                                <div className="w-[60%] text-left">
                                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-white text-transparent bg-clip-text">
                                        Backend Skills
                                    </h3>

                                    <p className="text-gray-300 md:text-sm text-xs mb-4">
                                        Node.js, Express, MongoDB, Socket.io, MySQL
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:mt-4">
                                {backendSkills.map((item) => (
                                    <span
                                        key={item.name}
                                        className="flex cursor-default  items-center gap-2 md:px-3 px-2 py-1 text-xs rounded-full bg-pink-600/20 border border-pink-400/40 hover:bg-pink-500/30 transition"
                                    >
                                        {item.icon}
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Tools Section */}
                <div className="max-w-fit mt-2 pb-2 md:pb-6y md:mt-0 mt-7">
                    <h2 className="text-2xl text-white/90 font-semibold mb-4">Additional Skills</h2>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/10 max-w-fit border border-indigo-400/60 rounded-2xl p-2 md:p-6 flex flex-wrap gap-3 shadow-lg shadow-indigo-500/20 transition"
                    >                        {tools.map((item) => (
                        <span
                            key={item.name}
                            className="flex cursor-default items-center gap-1 px-3 py-1 md:text-sm  text-xs rounded-full  border border-indigo-400/30 transition shadow-[0_0_8px_rgba(99,102,241,0.25)] bg-indigo-500/30 hover:shadow-[0_0_14px_rgba(99,102,241,0.5)]"                            >
                            {item.icon}
                            {item.name}
                        </span>
                    ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}   