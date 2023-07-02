import "./serviceItem.scss";

import React from "react";

const ServiceItem = ({ id, active, setSelected, title }) => {
  return (
    <>
      <li
        className={"li " + (active && "active")}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </>
  );
};

export default ServiceItem;
