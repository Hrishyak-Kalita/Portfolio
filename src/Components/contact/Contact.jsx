import { useRef } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import Form from "./Form";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Drop your Message</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>hrishyakkabde17@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>Nalbari, Assam</span>
        </motion.div>
        {/* <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+11 234 671</span>
        </motion.div> */}
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="0 0 35 35"
            xml:space="preserve"
          >
            <g>
              <g>
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M17.662,0.744V0l-1.465,1.062l1.465,1.062v-0.58c8.932,0.089,16.17,7.373,16.17,16.324
			c0,9.005-7.326,16.332-16.332,16.332S1.168,26.873,1.168,17.868H0.369C0.369,27.314,8.053,35,17.5,35
			c9.447,0,17.131-7.686,17.131-17.132C34.631,8.477,27.033,0.834,17.662,0.744z"
                />
                <path
                  d="M17.441,32.789v0.73l1.469-1.062l-1.469-1.062v0.595c-7.76-0.031-14.064-6.354-14.064-14.12
			c0-7.787,6.334-14.123,14.123-14.123c7.787,0,14.121,6.336,14.121,14.123h0.801c0-8.229-6.691-14.923-14.922-14.923
			c-8.231,0-14.922,6.695-14.922,14.923C2.578,26.078,9.242,32.757,17.441,32.789z"
                />
                <path
                  d="M14.355,21.012c0.022,0.023,0.045,0.047,0.065,0.07l0.004-0.005c0.853,0.821,1.861,2.03,3.502,3.127
			c3.457,2.306,6.111,1.663,7.673,0.806c2.693-1.484,3.9-4.656,3.9-7.141c0-6.618-5.383-12.002-12-12.002
			c-6.619,0-12.002,5.384-12.002,12.002c0,6.617,5.383,12,12.002,12c0.406,0,0.737-0.332,0.737-0.739s-0.331-0.739-0.737-0.739
			c-5.803,0-10.522-4.721-10.522-10.521c0-5.802,4.721-10.522,10.522-10.522s10.52,4.72,10.52,10.522
			c0,2.424-1.291,4.828-3.137,5.844c-0.67,0.369-1.398,0.553-2.174,0.561c0.465-0.278,0.869-0.652,1.17-1.127
			c0.061-0.088,0.135-0.166,0.176-0.264c0.24-0.58,0.264-1.236,0.404-1.849c0.182-0.784-3.42-2.31-3.732-1.334
			c-0.115,0.362-0.287,1.504-0.516,1.806c-0.199,0.27-0.697,0.141-1.012-0.124c-0.822-0.698-1.736-1.728-2.541-2.54l0.002-0.001
			c-0.022-0.021-0.048-0.044-0.068-0.065c-0.022-0.022-0.047-0.047-0.067-0.068v0.001c-0.812-0.802-1.84-1.718-2.541-2.541
			c-0.264-0.312-0.394-0.809-0.121-1.012c0.301-0.228,1.441-0.4,1.805-0.512c0.975-0.313-0.549-3.916-1.334-3.736
			c-0.613,0.144-1.27,0.165-1.848,0.406c-0.101,0.041-0.178,0.118-0.266,0.176c-2.058,1.305-2.322,4.47-0.314,6.827
			c0.768,0.9,1.564,1.774,2.385,2.625l-0.006,0.004C14.308,20.969,14.334,20.989,14.355,21.012z"
                />
              </g>
            </g>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Form />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
