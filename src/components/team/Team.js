import "./team.scss";

import React from "react";

const Team = () => {
  return (
    <div className="team" id="team">
      <h3>Meet Our Team</h3>
      <div className="exContainer">
        <div className="teamState">
          <p>
            We are a growing team of developers and digital marketing experts
            and thought leaders - full of personality minus the ego. We are the
            wearer of many hats dedicated to helping individuals and companies
            like yours grow.
          </p>
        </div>
        <div className="teamContainer">
          <div className="image1">
            <img src="alfred.png" alt="Alfred Obura" />
            <h4>Alfred Obura</h4>
          </div>
          <div className="image2">
            <img src="alfred.png" alt="Steven Musyoka" />
            <h4>Steven Musyoka</h4>
          </div>
          <div className="image3">
            <img src="alfred.png" alt="Alice Wambua" />
            <h4>Alice Wambua</h4>
          </div>
          <div className="image4">
            <img src="alfred.png" alt="Mark Sirname" />
            <h4>Mark Sirname</h4>
          </div>
        </div>
        <div className="coreValues">
          <h4 className="h4">our core values</h4>
          <div className="cont1">
            <p>
              Our principles are the core of Upstate. They help to drive every
              decision we make and every interaction we have with our clients.
            </p>
          </div>
          <div className="valuesContainer">
            <div className="value1">
              <h4>ingenuity</h4>
              <p>
                We look for clever and creative solutions by always asking, "Why
                is that?"
              </p>
            </div>
            <div className="value2">
              <h4>passion</h4>
              <p>we are fired up to serve our clients with the best.</p>
            </div>
            <div className="value3">
              <h4>transparency</h4>
              <p>We don't hide any secret</p>
            </div>
            <div className="value4">
              <h4>purpose</h4>
              <p>Nothing we do is random, but we live room for inspiration.</p>
            </div>
          </div>
          <div className="cultureContainer">
            <div className="cult">
              <h4>Our Culture</h4>
              <p className="p">
                We are a close-knit team of enthusiastic developers,
                programmers, strategists, marketers, creators, and educators.
                Think you'll fit in just fine?
              </p>
              <p className="joinTeam">
                <a href="#contact">join our team</a>
              </p>
            </div>
            <div className="cultPhotoContainer">
              <img src="c4.jpg" alt="org" />
            </div>
          </div>
          <div className="outsource">
            <h2>
              Ready for a software and website development partner for your
              project.
            </h2>
            <button className="btn" id="#contact">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#contact"
              >
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
