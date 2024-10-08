import "./hero.scss";
import { motion } from "framer-motion";
import Contact from "../contact/Contact";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildern: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2.5,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
    y: 1,
  },
  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={textVariants}> Hello! I am</motion.h3>
          <motion.h2 variants={textVariants}>HRISHYAK KALITA</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Developer | Programmer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <motion.a
                href="#services"
               
                whileHover={{ scale: 1.1 }}
              >
                See the latest works
              </motion.a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt=""
            animate="scrollButton"
          />
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
         <motion.h2
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        > 
        Programmer developer
        {/* </motion.h2> 
      </motion.div> */}
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
