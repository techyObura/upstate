import "./about.scss";

import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="intro">
        <h3>About Us</h3>
        <h4>Welcome to Upstate!</h4>
        <p>
          Hey there! We are Upstate, a proficient Software and Website
          Development Company since 2016. We are glad to have you reach us and
          we can't wait to discuss with you the appropriate Tech for your
          lifestyle, profession or business
        </p>
        <p>
          At Upstate, we handle <span className="highlight">Technology</span>{" "}
          and digitalization. Upstate comprise of a team of developers who have
          different technological innovations which serve as the cutting-edge
          solutions to improve how humanity live in this information era.
        </p>
        <h4>Mission</h4>
        <p>
          Our Mission is to innovate and transform the world using innovative
          technologies and skills through experience. Therefore, we strive to
          provide quality products at affordable prices.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
