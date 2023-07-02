import "./services.scss";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState, useEffect } from "react";
import { websites, software, systems, marketing } from "../../data";
import ServiceItem from "../serviceItem/ServiceItem";
import { motion } from "framer-motion";

const Services = () => {
  const [selected, setSelected] = useState("websites");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "websites",
      title: "Websites",
    },

    {
      id: "software",
      title: "Software",
    },

    {
      id: "systems",
      title: "Systems",
    },

    {
      id: "marketing",
      title: "Marketing",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "systems":
        setData(systems);
        break;

      case "marketing":
        setData(marketing);
        break;

      case "websites":
        setData(websites);
        break;

      case "software":
        setData(software);
        break;

      default:
        setData(websites);
    }
  }, [selected]);

  const serviceVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="services"
      id="services"
      variants={serviceVariant}
      initial="hidden"
      animate="visible"
    >
      <h3>Our Services</h3>
      <div className="servicesWrapper">
        <ul className="ul">
          {list.map((item) => (
            <ServiceItem
              title={item.title}
              key={item.id}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container1">
          {data.map((tool) => (
            <motion.div className="serviceContainer">
              <div className="itemContainer">
                <div className="item">
                  <div className="sec1">
                    <h4>{tool.title}</h4>
                    <p>{tool.fee}</p>
                    <div className="basic">
                      <p className="besic">{tool.category}</p>
                    </div>
                    <p>{tool.support}</p>
                    <p>{tool.domain}</p>
                  </div>
                  <div className="sec2">
                    <p className="sec2-ksh"></p>
                  </div>
                  <div className="sec3">
                    <ul>
                      <li
                        className={
                          (tool.websites && "websites") ||
                          (tool.software && "software") ||
                          (tool.systems && "systems") ||
                          (tool.marketing && "marketing")
                        }
                      >
                        <CheckCircleOutlineIcon />
                        <p>{tool.item1}</p>
                      </li>
                      <li
                        className={
                          (tool.websites && "websites") ||
                          (tool.software && "software") ||
                          (tool.systems && "systems") ||
                          (tool.marketing && "marketing")
                        }
                      >
                        <CheckCircleOutlineIcon />
                        <p>{tool.item2}</p>
                      </li>
                      <li
                        className={
                          (tool.websites && "websites") ||
                          (tool.software && "software") ||
                          (tool.systems && "systems") ||
                          (tool.marketing && "marketing")
                        }
                      >
                        <CheckCircleOutlineIcon />
                        <p>{tool.item3}</p>
                      </li>
                      <li
                        className={
                          (tool.websites && "websites") ||
                          (tool.software && "software") ||
                          (tool.systems && "systems") ||
                          (tool.marketing && "marketing")
                        }
                      >
                        <CheckCircleOutlineIcon />
                        <p>{tool.item4}</p>
                      </li>
                      <li
                        className={
                          (tool.websites && "websites") ||
                          (tool.software && "software") ||
                          (tool.systems && "systems") ||
                          (tool.marketing && "marketing")
                        }
                      >
                        <CheckCircleOutlineIcon />
                        <p>{tool.item5}</p>
                      </li>
                      <li
                        className={
                          (tool.websites && "websites") ||
                          (tool.software && "software") ||
                          (tool.systems && "systems") ||
                          (tool.marketing && "marketing")
                        }
                      >
                        <CheckCircleOutlineIcon />
                        <p>{tool.item6}</p>
                      </li>
                      <li
                        className={
                          (tool.websites && "websites") ||
                          (tool.software && "software") ||
                          (tool.systems && "systems") ||
                          (tool.marketing && "marketing")
                        }
                      >
                        <CheckCircleOutlineIcon />
                        <p>{tool.item7}</p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={
                      "sec4 " + (tool.basic && "basic") ||
                      (tool.medium && "medium") ||
                      (tool.premium && "premium")
                    }
                  >
                    <a href="#contact">Contact Us</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
