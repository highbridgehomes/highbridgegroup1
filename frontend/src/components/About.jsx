import React from "react";
import "./About.css"; // Import the CSS file for styl

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
          Welcome to Highbridge Homes, a company committed to creating exceptional homes
              that reflect the true essence of luxury and comfort. With years of experience in the
              real estate industry, we take pride in our craftsmanship, attention to detail, and
              dedication to customer satisfaction.
          </p>
          <a href="/about" className="read-more-button">
            Read More
          </a>
        </div>
        <div className="about-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vkF__wRUFKA" 
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;