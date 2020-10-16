import React from "react";
import MultiCarousel from "../MultiCarousel/MultiCarousel";
import "./OurProjecs.css";

const OurProjecs = () => {
  return (
    <div className="ourProjecs">
      <h3 style={{color: "white", marginBottom: "60px", marginTop: "10px"}}>
        <span>Here Our</span> <span className="colorGreen"> Projects</span>
      </h3>
      <MultiCarousel />
    </div>
  );
};
export default OurProjecs;
