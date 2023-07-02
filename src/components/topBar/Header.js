import "./header.scss";

import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="right">
          <div className="hamburger" onClick={() => setActive(!active)}>
            <span className={"line1 " + (active && "active")}></span>
            <span className={"line2 " + (active && "active")}></span>
            <span className={"line3 " + (active && "active")}></span>
          </div>
        </div>

        <div className={"feature " + (active && "active")}>
          <ul className={"navIcon " + (active && "active")}>
            <li className={active && "active"} onClick={() => setActive(false)}>
              <a href="#home">Home</a>
            </li>
            <li className={active && "active"} onClick={() => setActive(false)}>
              <a href="#about">About</a>
            </li>
            <li className={active && "active"} onClick={() => setActive(false)}>
              <a href="#services">Services</a>
            </li>
            <li className={active && "active"} onClick={() => setActive(false)}>
              <a href="#team">Our Team</a>
            </li>
            <li className={active && "active"} onClick={() => setActive(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="socialMedia">
            <li>
              <a href="facebook.om">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <YouTube />
              </a>
            </li>
          </ul>
          <ul className="stars">
            <li className="star-1">U</li>
            <li className="star-2">p</li>
            <li className="star-3">s</li>
            <li className="star-4">t</li>
            <li className="star-5">a</li>
          </ul>
        </div>

        <div className={"features " + (active && "active")}>
          <ul className={"navIcons " + (active && "active")}>
            <li className="active1">
              <a href="#home">Home</a>
            </li>
            <li className={active && "active"}>
              <a href="#about">About</a>
            </li>
            <li className={active && "active"}>
              <a href="#services">Services</a>
            </li>
            <li className={active && "active"}>
              <a href="#team">Our Team</a>
            </li>
            <li className={active && "active"}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="star">
            <li className="star1">U</li>
            <li className="star2">p</li>
            <li className="star3">s</li>
            <li className="star4">t</li>
            <li className="star5">a</li>
          </ul>
        </div>
        <div className="headerTitle">
          <div className="logo">
            <span className="log1"></span>
            <span className="log2"></span>
            <span className="log3"></span>
          </div>
          <div className="titleName">
            <h1>
              <span className="crevName">U</span>pstate.
            </h1>
          </div>
        </div>

        <div className="newsletter">
          <div className="contContainer">
            <h3>
              <a href="#contact">Contact Us</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
