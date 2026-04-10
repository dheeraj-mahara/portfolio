import { useState } from "react";
import { motion } from "framer-motion";

const footerVariant = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Footer() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <footer

      className="relative bg-[#070B1A] text-white "
    >
      <div className="absolute inset-0">
        <img
          src="src/assets/footerbg.png"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>


      <motion.div
        variants={footerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" relative w-[95%] max-w-7xl mx-auto  pb-5">

        {/* TOP SECTION */}
        <motion.div
          variants={itemVariant}
          className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-2"
        >
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold tracking-wide">
              Dheeraj Mahara
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Thanks for visiting my portfolio
            </p>
          </div>

          {/* RATING */}
          <div className="text-center">
            <p className="text-sm mb-2 text-gray-300">
              Rate my portfolio
            </p>

            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <span
                    className={`${(hover || rating) >= star
                      ? "text-yellow-400 cursor-pointer drop-shadow-md"
                      : "text-gray-500 "
                      }`}
                  >
                    ★
                  </span>
                </motion.button>
              ))}
            </div>

            <p
              className={`text-xs text-gray-400 mt-1  transition-opacity duration-300 ${rating > 0 ? "opacity-100" : "opacity-0"
                }`}
            >
              Thanks for rating {rating} ⭐
            </p>
          </div>

        </motion.div>



        {/* BOTTOM */}
        <motion.div
          variants={itemVariant}
          className="text-center text-gray-500 text-sm mt-2"
        >          © {new Date().getFullYear()} Dheeraj Mahara • Built with React & Tailwind
        </motion.div>

      </motion.div>
    </footer>
  );
}