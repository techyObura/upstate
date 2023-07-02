import "./scrollButton.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <div className={"floatingMenu " + (active && visible && "active")}>
        <div
          className="coat"
          style={{ display: visible ? "block" : "none" }}
          onClick={() => setActive(!active)}
        >
          <div className="hamburger">
            <span className={"lineA " + (active && "active")}></span>
            <span className={"lineB " + (active && "active")}></span>
            <span className={"lineC " + (active && "active")}></span>
          </div>
        </div>
        <ul className={"hamburgerList " + (active && visible && "active")}>
          <li>
            <a href="#home" onClick={() => setActive(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActive(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setActive(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => setActive(false)}>
              Our Team
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActive(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        className="btn-btn"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <ArrowDownwardIcon className="arrowUp" />
      </div>
    </div>
  );
};

export default ScrollButton;
