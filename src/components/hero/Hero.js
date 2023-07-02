import "./hero.scss";
import React from "react";
import { ArrowBackIos } from "@mui/icons-material";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroText = useRef();

  useEffect(() => {
    init(heroText.current, {
      showCursor: false,
      loop: true,
      typeSpeed: 100,
      backDelay: 3000,

      strings: ["Skilled", "Creative", "Licensed", "Organized", "Experienced"],
    });
  }, []);

  const serviceVariant = {
    hidden: {
      opacity: 0,
      y: 400,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className="hero"
      id="home"
      variants={serviceVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="externalContainer">
        <div className="conta">
          <h2>
            {" "}
            Upstate is an established Software and Web development Company
          </h2>
          {/* <h2>
            We Employ Modern Technologies to solve modern corporate challenges.
          </h2> */}
        </div>
        <div className="leftContainer">
          <div className="imgContainer">
            <img src="c4.jpg" alt="what we do" />
          </div>
        </div>
        <div className="rightContainer">
          <div className="rightWrapper">
            <h2>
              We are a TEAM of <span className="skills" ref={heroText}></span>{" "}
              Professionals.
            </h2>
          </div>
          .
          <div className="cont">
            <h2>
              We Employ Modern Technologies to solve modern corporate
              challenges.
            </h2>
          </div>
          <div className="arrowContact">
            <a href="#contact">
              <ArrowBackIos className="arrow-down" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
