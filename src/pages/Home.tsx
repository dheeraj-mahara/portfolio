import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

type FallingTextProps =
    {
        text: string;
        onComplete?: () => void;
        speed?: number;
        delayAfter?: number;
        animation?: "fall" | "wave" | "flip" | "glitch";
    };

const FallingText: React.FC<FallingTextProps> = ({
    text,
    onComplete,
    speed = 50,
    delayAfter = 1000,
    animation = "fall",
}) => {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const animationTime = text.length * speed;

        const exitTimer = setTimeout(() => {
            setExit(true);
        }, animationTime + delayAfter);

        const completeTimer = setTimeout(() => {
            onComplete?.();
        }, animationTime + delayAfter + 600);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [text, speed, delayAfter, onComplete]);

    const getAnimationClass = () => {
        if (exit) return "animate-rise";

        switch (animation) {
            case "wave":


                return "opacity-0 animate-wave";
            case "flip":
                return "opacity-0 animate-flip";
            case "glitch":
                return "opacity-0 animate-glitch";
            default:
                return "opacity-0 animate-fall";
        }
    };

    return (
        <span className="inline-block whitespace-pre">
            {text.split("").map((char, index) => (
                <span
                    key={`${char}-${index}`}
                    className={`inline-block ${getAnimationClass()}`}
                    style={{
                        animationDelay: `${index * (speed / 1000)}s`,
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const Home = () => {

    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        if (step === 0) {
            const timer = setTimeout(() => {
                setStep(1);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [step]);


    return (
        <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden md:pt-20 pt-13">

            {/* BG */}
            <div className="absolute inset-0">
                <img
                    src="src/assets/herobg.png"
                    alt="bg"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Container */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="z-10 w-[92%] max-w-7xl mx-auto flex flex-wrap pb-8 items-center lg:items-start justify-around gap-5 md:gap-10"
            >
                {/* LEFT */}
                <motion.div
                    variants={item}
                    className="md:text-center w-full md:w-[auto] pl-3 md:text-left md:pt-7"
                >                    <h2 className="text-white font-bold text-xl md:text-[45px]">
                        Hi, I'm
                    </h2>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold p-0">
                        <span
                            className="bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-400 via-green-400 to-blue-500 
                                 text-transparent bg-clip-text bg-[length:300%_300%] animate-shine"
                        >
                            Dheeraj
                        </span>
                    </h1>

                    <h3 className="text-xl sm:text-[32px] mt-3 font-bold">

                        {step === 0 && (
                            <FallingText
                                text="UI/UX Designer"
                                animation="wave"
                                onComplete={() => setStep(1)}
                            />
                        )}

                        {step === 1 && (
                            <FallingText
                                text="Frontend Developer"
                                animation="flip"
                                onComplete={() => setStep(2)}
                            />
                        )}

                        {step === 2 && (
                            <FallingText
                                text="Backend Developer"
                                animation="glitch"
                                onComplete={() => setStep(3)}
                            />
                        )}

                        {step === 3 && (
                            <FallingText
                                text="MERN Stack Developer"
                                animation="fall"
                                onComplete={() => setStep(0)}
                            />
                        )}

                    </h3>


                    <p className="text-gray-400 max-w-lg  mx-auto mt-3 md:mx-0 hidden md:flex min-h-[24px]">    <TypeAnimation
                        sequence={[
                            "I craft scalable, high-performance web applications.",
                            2000,
                        ]} speed={60} cursor={true} repeat={0} wrapper="span" />
                    </p>

                    <p className="invisible max-w-lg mx-auto h-0  md:mx-0 flex">
                        I craft scalable, high-performance web applications .
                    </p>

                    <div className="md:flex hidden flex-col sm:flex-row gap-6 justify-center md:justify-start pt-4 mt-2">
                        <a href="#projects">
                            <button className=" cursor-pointer relative inline-block px-7 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-sky-600 to-indigo-500 shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105">
                                <span className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-xl blur-2xl opacity-30 animate-sine"></span>
                                <span className="relative z-10">View Projects</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                                <span className="absolute top-0 right-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                            </button>
                        </a>
                        <a href="#contact">
                            <button className=" cursor-pointer relative inline-block px-7 py-2 rounded-xl font-medium text-gray-100 bg-gray-700 shadow-md overflow-hidden group border-2 border-transparent hover:border-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transform transition-all duration-300 hover:scale-105">
                                <span className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-2xl opacity-20 animate-sine-slow"></span>
                                <span className="relative z-10">Contact Me</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>
                                <span className="absolute top-0 right-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT */}

                <motion.div
                    variants={item}
                    className="flex flex-col md:w-[40%] justify-center md:justify-start relative"
                >                    <div className="absolute w-[350px] h-[350px] bg-pink-500 blur-[120px] opacity-20"></div>
                    <div className="absolute w-[250px] h-[250px] bg-blue-500 blur-[120px] opacity-20"></div>

                    <motion.img
                        src="src/assets/hero.png"
                        alt="hero"
                        className="w-full max-w-[500px] h-auto object-contain"
                        initial={{ y: 20 }}
                        animate={{ y: -20 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2
                        }}
                    />
                    <div className="md:hidden flex text-sm sm:flex-row gap-6 justify-center md:justify-start pt-4 mt-2">
                        <button className="bg-gradient-to-r from-sky-600 to-indigo-500 px-7 py-2 rounded-xl font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition duration-300">
                            View Projects
                        </button>

                        <button className="px-7 py-2 rounded-xl font-medium bg-gray-700 hover:bg-gray-800 hover:scale-105 transition duration-300">
                            Contact Me
                        </button>
                    </div>
                </motion.div>



            </motion.div>
        </section>
    );
};

export default Home;