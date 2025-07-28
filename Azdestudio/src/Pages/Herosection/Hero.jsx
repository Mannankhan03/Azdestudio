import React, { useEffect, useState } from "react";
import "../Herosection/Hero.css";
import backgroundpic from "../../assets/herobackground.png";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState(null);

  const fetchHeroData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/hero/get-banners");
      setData(response.data.data[0]); 
    } catch (error) {
      console.error("Error fetching hero data:", error.message);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  if (!data) return null; 

  return (
    <div className="Hero-section">
      <div className="hero-content">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <div className="btn-arrow">
          <button className="hero-btn">
            Learn More
            <span className="arrow">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="laboratory-images">
        <img className="backgroundimage" src={backgroundpic} alt="background" />
        <img className="laboratory-img" src={data.bannerimage} alt="banner" />
      </div>
    </div>
  );
};

export default Hero;
