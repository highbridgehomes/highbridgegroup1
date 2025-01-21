import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img src="/assets/images/farmcity/farmcity.jpg" alt="Service 1" />
            </div>
            <div className="service-card-back">
              <h3>Service 1</h3>
              <p>Explore our first premium service with unmatched quality.</p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img src="/assets/images/service2.jpg" alt="Service 2" />
            </div>
            <div className="service-card-back">
              <h3>Service 2</h3>
              <p>Discover our second service, designed for excellence.</p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img src="/assets/images/service3.jpg" alt="Service 3" />
            </div>
            <div className="service-card-back">
              <h3>Service 3</h3>
              <p>Experience our third service, tailored to your needs.</p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img src="/assets/images/service4.jpg" alt="Service 4" />
            </div>
            <div className="service-card-back">
              <h3>Service 4</h3>
              <p>Our fourth service brings innovation and efficiency.</p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img src="/assets/images/service5.jpg" alt="Service 5" />
            </div>
            <div className="service-card-back">
              <h3>Service 5</h3>
              <p>Elevate your experience with our fifth specialized service.</p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img src="/assets/images/service6.jpg" alt="Service 6" />
            </div>
            <div className="service-card-back">
              <h3>Service 6</h3>
              <p>Discover the sixth service that redefines excellence.</p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;