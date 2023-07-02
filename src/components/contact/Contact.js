import "./contact.scss";
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="contactLogo2">
          <div className="h2">
            <h2>Contact Us</h2>
          </div>
          <p>
            Upstate is software and website development company that is based in
            Nairobi, Kenya.
          </p>
          <h5>Phone</h5>
          <p className="phoneCall">
            {" "}
            <Phone /> +254 723 414 937
          </p>
          <p className="phoneCall">
            {" "}
            <Phone />
            +254 799 043 088
          </p>

          <div className="socialTab">
            <a href="#t">
              <p className="socialImg">
                <Facebook />
              </p>
            </a>
            <a href="#t">
              <p className="socialImg">
                <Twitter />
              </p>
            </a>
            <a href="#t">
              <p className="socialImg">
                <Instagram />
              </p>
            </a>
            <a href="#t">
              <p className="socialImg">
                <LinkedIn />
              </p>
            </a>
            <a href="#t">
              <p className="socialImg">
                <YouTube />
              </p>
            </a>
          </div>
        </div>
        <div className="wrapUp">
          <a href="#services">
            <h3>Services</h3>
            <h4>Software Services</h4>
            <ul className="serContainer">
              <li> &mdash; Web Application Development</li>
              <li> &mdash; Custom Software Development</li>
              <li> &mdash; Mobile Application Development</li>
              <li> &mdash; Desktop Application Development</li>
              <li> &mdash; Software Prototyping</li>
              <li> &mdash; IT Consulting</li>
            </ul>

            <h4>Digital Marketing Services</h4>
            <ul className="serContainer">
              <li> &mdash; Graphic Design and Branding</li>
              <li> &mdash; Digital Marketing and Social media management</li>
              <li> &mdash; E-commerce solution</li>
              <li> &mdash; Bulk Email & SMS Marketing</li>
              <li> &mdash; Branding Strategy & Corporate Identity</li>
              <li> &mdash; Display Advertising</li>
            </ul>
          </a>

          <a href="#about">
            <h3>About Us</h3>
            <p>learn everything concerning us</p>
          </a>
          <a href="#about">
            <h3>Reviews</h3>
            <p>know how customers we have served rate us</p>
          </a>
        </div>
        <div className="serviceTerms">
          <p>
            Terms of Service| Refund Policy | Privacy Policy | Affiliate
            Disclaimer
          </p>
        </div>
      </div>
      <div className="copyright">
        Copyright &#169;2023 Upstate Software Development Company. All Rights
        Reserved
      </div>
    </div>
  );
};

export default Contact;
