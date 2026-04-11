import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import contectBg from "../assets/contectbg.png";
import heroImg from "../assets/hero.png";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const resetShake = () => {
        setTimeout(() => {
            setErrors({
                name: false,
                email: false,
                subject: false,
                message: false
            });
        }, 400);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
setLoading(true)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // NAME
        if (!formData.name.trim()) {
            setErrors({ name: true, email: false, subject: false, message: false });
            toast.error("Name is required");
            resetShake();
            return;
        }

        // EMAIL EMPTY
        if (!formData.email.trim()) {
            setErrors({ name: false, email: true, subject: false, message: false });
            toast.error("Email is required");
            resetShake();
            return;
        }

        // EMAIL INVALID
        if (!emailRegex.test(formData.email)) {
            setErrors({ name: false, email: true, subject: false, message: false });
            toast.error("Invalid email address");
            resetShake();
            return;
        }

        // SUBJECT
        if (!formData.subject.trim()) {
            setErrors({ name: false, email: false, subject: true, message: false });
            toast.error("Subject is required");
            resetShake();
            return;
        }

        // MESSAGE
        if (!formData.message.trim()) {
            setErrors({ name: false, email: false, subject: false, message: true });
            toast.error("Message is required");
            resetShake();
            return;
        }


        try {
            const res = await fetch("https://formspree.io/f/xqegreek", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success("Message sent successfully ");
console.log(formData);

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                toast.error("Something went wrong ❌");
            }
        } catch {
            toast.error("Network error ⚠️");
        } finally{
            setLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-[#070B1A] text-white overflow-hidden py-5 md:py-6 pb-13 md:py-4 sm:py-20">
            <Toaster position="top-right" />
            <div className="absolute inset-0">
                <img
                    src={contectBg}
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

                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`rainbow-border w-full mb-4 p-3 rounded-lg 
${errors.name ? "shake border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]" : "border-sky-300/40"}
bg-white/10 border outline-none transition-all duration-300`} />

                        <motion.input
                            variants={formItem}

                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className={`rainbow-border w-full mb-4 p-3 rounded-lg 
${errors.email ? "shake border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]" : "border-sky-300/40"}
bg-white/10 border outline-none transition-all duration-300`}
                        />

                        <motion.input
                            variants={formItem}

                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className={`rainbow-border w-full mb-4 p-3 rounded-lg 
${errors.subject ? "shake border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]" : "border-sky-300/40"}
bg-white/10 border outline-none transition-all duration-300`}
                        />





                        <motion.textarea
                            variants={formItem}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className={`rainbow-border w-full mb-4 p-3 rounded-lg 
${errors.message ? "shake border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]" : "border-sky-300/40"}
bg-white/10 border outline-none transition-all duration-300`}                        ></motion.textarea>






                       <motion.button
  onClick={handleSubmit}
  type="submit"
  disabled={loading}
  variants={formItem}
  className="button-animated cursor-pointer relative w-full py-3 px-6 text-lg font-bold text-white rounded-2xl overflow-hidden group shadow-xl transition-all duration-200 
  active:scale-95 active:shadow-inner active:duration-150
  disabled:opacity-70 disabled:cursor-not-allowed"
>
  {/* gradient bg */}
  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 blur-2xl opacity-90 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 animate-gradient"></span>

  {/* content */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    {loading ? (
      <>
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        Sending...
      </>
    ) : (
      "Send Message"
    )}
  </span>

  {/* shine left */}
  <span className="absolute -left-32 top-0 w-24 h-full bg-white/30 rounded-full opacity-0 transform -rotate-12 translate-x-0 group-hover:translate-x-160 group-hover:opacity-90 transition-all duration-900 ease-in-out blur-md"></span>

  {/* shine right */}
  <span className="absolute -right-32 top-0 w-24 h-full bg-white/30 rounded-full opacity-0 transform -rotate-12 translate-x-0 group-hover:-translate-x-160 group-hover:opacity-90 transition-all duration-900 ease-in-out blur-md"></span>

  {/* border */}
  <span className="absolute inset-0 rounded-2xl border border-white/10 shadow-inner pointer-events-none"></span>
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
                            src={heroImg}
                            alt="avatar"
                            className="w-60 h-60 object-contain md:block hidden shadow-md"

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