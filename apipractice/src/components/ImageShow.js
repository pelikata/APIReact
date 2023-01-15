import React from "react";
import "./ImageShow.css";
import { useState } from "react";

function ImageShow({ image }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <img
        onClick={handleClick}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageShow;
