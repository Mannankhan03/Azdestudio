import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../Section3/Herosection2.css";

import solutionprod1 from "../../assets/solutionprod1.png"
import solutionprod2 from "../../assets/solutionprod2.png"
import solutionprod3 from "../../assets/solutionprod3.png"


const solutions = [
  {
    title: "Containment Solutions",
    img : solutionprod1,
    color:" #FCE113", 
  },
  {
    title: "Material Handling",
    img: solutionprod2,
    color: "#FF9C2B", 
  },
  {
    title: "Aseptic Solutions",
    img: solutionprod3,
    color: "#1FA3D7", 
  },
];

const Herosection2 = () => {
  return (
    <div className="solutions-section">
      <h2>Our Solutions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </p>

      <div className="solutions-grid">
        {solutions.map((item, index) => (
          <div className="solution-card" key={index}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
            <button className="explore-btn">
              <span>Explore More</span>
              <span
                className="arrow-circle"
                style={{ backgroundColor: item.color }}
              >
                <FaArrowRight color="#000" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herosection2;
