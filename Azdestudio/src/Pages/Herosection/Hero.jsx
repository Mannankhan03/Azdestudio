import React, { useEffect, useState } from "react";
import "../Herosection/Hero.css";
import backgroundpic from "../../assets/herobackground.png";
import { FaArrowRight } from "react-icons/fa";
import brandlogo from "../../assets/brandlogo.png";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fetchHeroData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/hero/get-banners"
      );
      setData(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching hero data:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:4000/api/form-inut/contact", formData);
      alert("Submitted successfully & email sent!");
      setFormData({ name: "", email: "", message: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
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
          <button className="hero-btn" onClick={() => setShowForm(true)}>
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
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <img
              src={brandlogo}
              style={{
                width: "200px",
                height: "50px",
                color: "black",
                background: "black",
                margin: "auto",
                display: "flex",
              }}
              alt=""
            />
            <div className="modal-heading">
              <h2>Contact Us</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                x
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button className="submit-btn" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
