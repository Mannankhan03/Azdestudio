import building from "../../assets/buildingimage.png"
import { FaArrowRight } from 'react-icons/fa';
import "../Herosection4/Herosection3.css"

const Herosection3 = () => {
  return (
    <section className="who-we-are">
      <div className="who-title">
        <h2>Who we are</h2>
      </div>
      <div className="who-container">
        <div className="who-image">
          <img src={building} alt="Building" />
        </div>
        <div className="who-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero.
          </p>
          <button className="learn-more-btn">
            Learn more <span className="arrow-circle"><FaArrowRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection3;
