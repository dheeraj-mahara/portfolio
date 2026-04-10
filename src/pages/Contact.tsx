import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import { motion } from "framer-motion";
const formContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const formItem = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
};

const rightCard = {
    hidden: { opacity: 0, rotate: 5, scale: 0.95 },
    show: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6 }
    }
};

const Contact = () => {


    return (
        <section className="relative min-h-screen bg-[#070B1A] text-white overflow-hidden py-5 md:py-6 pb-13 md:py-4 sm:py-20">

            <div className="absolute inset-0">
                <img
                    src="src/assets/contectbg.png"
                    alt="bg"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute top-20 left-10 w-52 sm:w-72 h-52 sm:h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-52 sm:w-72 h-52 sm:h-72 bg-pink-600/20 blur-[120px] rounded-full"></div>


            {/* HEADER */}
            <div className="relative w-[95%] max-w-7xl mx-auto px-2 sm:px-4">
                <h1 className="text-4xl font-semibold">

                    <span className="bg-gradient-to-r from-pink-500  via-yellow-500 to-sky-400 text-transparent bg-clip-text">
                        Get In Touch
                    </span>
                </h1>

                <p className="mt-3 text-pink-200 max-w-full md:max-w-[40%]">
                    Have a question or want to work together? Feel free to reach out to me!
                </p>

                <div className=" w-full flex flex-wrap gap-6 justify-between ">

                    {/* LEFT FORM */}
                    <motion.div
                        variants={formContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="w-full md:w-[45%] md:p-6 p-1"
                    >                        <h2 className="text-2xl text-white/90 font-semibold mb-6">Contact Info</h2>



                        <motion.input
                            variants={formItem}
                            type="text"
                            placeholder="Your Name"
                            className="rainbow-border w-full mb-4 p-3 rounded-lg bg-white/10 border  border-sky-300/40 outline-none shadow-[0_0_5px_rgba(56,189,248,0.6)] focus:shadow-[0_0_10px_rgba(56,189,248,0.8),0_0_3px_rgba(255,255,255,0.4)] transition"
                        />



                        <motion.input
                            variants={formItem}
                            type="email"
                            placeholder="Your Email"
                            className="rainbow-border w-full mb-4 p-3 rounded-lg bg-white/10 border  border-sky-300/40 outline-none shadow-[0_0_5px_rgba(56,189,248,0.6)] focus:shadow-[0_0_10px_rgba(56,189,248,0.8),0_0_3px_rgba(255,255,255,0.4)] transition"
                        />



                        <motion.input
                            variants={formItem}
                            type="text"
                            placeholder="Subject"
                            className=" rainbow-border w-full mb-4 p-3 rounded-lg bg-white/10 border border-sky-300/40 outline-none shadow-[0_0_5px_rgba(56,189,248,0.6)] focus:shadow-[0_0_10px_rgba(56,189,248,0.8),0_0_3px_rgba(255,255,255,0.4)] transition"
                        />





                        <motion.textarea
                            variants={formItem}

                            placeholder="Message"
                            className=" rainbow-border w-full mb-4 p-3 rounded-lg bg-white/10 border  border-sky-300/40 outline-none shadow-[0_0_5px_rgba(56,189,248,0.6)] focus:shadow-[0_0_10px_rgba(56,189,248,0.8),0_0_3px_rgba(255,255,255,0.4)] transition"
                        ></motion.textarea>






                        <motion.button
                            variants={formItem}
                            className="button-animated cursor-pointer relative w-full py-3 px-6 font-bold text-white rounded-xl overflow-hidden group shadow-lg transition-all duration-200 
             active:scale-95 active:shadow-inner active:duration-150"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 blur-2xl opacity-90 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 animate-gradient"></span>

                            {/* Button text */}
                            <span className="relative z-10">Send Message</span>

                            {/* Left shine */}
                            <span className="absolute -left-32 top-0 w-24 h-full bg-white/30 rounded-full opacity-0 transform -rotate-12 translate-x-0 group-hover:translate-x-160 group-hover:opacity-90 transition-all duration-900 ease-in-out blur-md"></span>

                            {/* Right shine */}
                            <span className="absolute -right-32 top-0 w-24 h-full bg-white/30 rounded-full opacity-0 transform -rotate-12 translate-x-0 group-hover:-translate-x-160 group-hover:opacity-90 transition-all duration-900 ease-in-out blur-md"></span>

                            {/* Inner border */}
                            <span className="absolute inset-0 rounded-xl border border-white/10 shadow-inner pointer-events-none"></span>
                        </motion.button>


                    </motion.div>

                    {/* RIGHT CARD */}
                    <motion.div
                        variants={rightCard}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="w-full md:w-[50%] h-fit self-center bg-white/5 backdrop-blur-l p-6 rounded-2xl md:border-t md:border-l md:border-r border-pink-500/40 flex flex-col md:flex-col lg:flex-row items-center gap-3 md:gap-6 md:shadow-[0_0_6px_rgba(236,72,153,0.4),0_0_20px_rgba(236,72,153,0.3)]"
                    >                        {/* Avatar */}
                        <motion.img
                            src="/src/assets/hero.png"
                            alt="avatar"
                            className="w-60 h-60 object-contain md:block hidden shadow-md"
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity
                            }}
                        />

                        {/* Content */}
                        <div className="w-full text-center lg:text-left">

                            <h3 className="text-xl text-white/90 font-semibold mb-4">
                                Contact Info
                            </h3>

                            <div className="space-y-3">

                                <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition p-3 rounded-lg">
                                    <MdEmail className="text-sky-400/90" />
                                    <span className="text-sm text-white/90">mehradheeraj314@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition p-3 rounded-lg">
                                    <FiPhone className="text-pink-400/90" />
                                    <span className="text-sm text-white/90">+91 7027215871</span>
                                </div>

                                <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition p-3 rounded-lg">
                                    <MdLocationOn className="text-pink-400/90" />
                                    <span className="text-sm text-white/90">Haryana, India</span>
                                </div>

                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center lg:justify-start gap-4 mt-6">

                                <div className="flex gap-4">

                                    <a
                                        href="https://github.com/dheeraj-mahara"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            whileTap={{ scale: 0.9 }} className="p-3 cursor-pointer bg-white/10 hover:bg-pink-500/20 transition rounded-lg hover:scale-110">
                                            <FaGithub />
                                        </motion.button>
                                    </a>

                                    <a
                                        href="https://www.youtube.com/@ArtistDheerajMahara"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            whileTap={{ scale: 0.9 }} className="p-3 cursor-pointer bg-white/10 hover:bg-red-500/20 transition rounded-lg hover:scale-110">
                                            <FaYoutube />
                                        </motion.button>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/dheeraj-mahara-1342b6363"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            whileTap={{ scale: 0.9 }} className="p-3 cursor-pointer bg-white/10 hover:bg-pink-500/20 transition rounded-lg hover:scale-110">
                                            <FaLinkedin />
                                        </motion.button>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Contact;