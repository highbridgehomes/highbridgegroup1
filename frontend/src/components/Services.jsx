import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {/* Architectural Design Service */}
        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img
                src="/assets/images/services/architecturaldesign.jpg"
                alt="Architectural Design"
              />
            </div>
            <div className="service-card-back">
              <h3>Architectural Design</h3>
              <p>
                We create innovative and practical architectural designs tailored to meet your unique vision and needs.
              </p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        {/* Building Construction Service */}
        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img
                src="/assets/images/services/buildingconstruction.jpg"
                alt="Building Construction"
              />
            </div>
            <div className="service-card-back">
              <h3>Building Construction</h3>
              <p>
                From concept to completion, we deliver top-notch building construction services with quality and efficiency.
              </p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        {/* Facility Management Service */}
        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img
                src="/assets/images/services/facilitymanagement.jpg"
                alt="Facility Management"
              />
            </div>
            <div className="service-card-back">
              <h3>Facility Management</h3>
              <p>
                Ensure your property remains in peak condition with our comprehensive facility management solutions.
              </p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        {/* Land Banking Service */}
        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img
                src="/assets/images/services/landbanking.jpg"
                alt="Land Banking"
              />
            </div>
            <div className="service-card-back">
              <h3>Land Banking</h3>
              <p>
                Secure your financial future with strategic land banking opportunities in prime locations.
              </p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        {/* Real Estate Development Service */}
        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img
                src="/assets/images/services/realestaedevelopememt.jpg"
                alt="Real Estate Development"
              />
            </div>
            <div className="service-card-back">
              <h3>Real Estate Development</h3>
              <p>
                We transform spaces with modern and sustainable real estate development projects.
              </p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>

        {/* Real Estate Consultancy Service */}
        <div className="service-item">
          <div className="service-card-inner">
            <div className="service-card-front">
              <img
                src="/assets/images/services/realestateconsultancy.jpg"
                alt="Real Estate Consultancy"
              />
            </div>
            <div className="service-card-back">
              <h3>Real Estate Consultancy</h3>
              <p>
                Leverage our expertise to make informed decisions in buying, selling, and investing in real estate.
              </p>
              <p>View Full Details</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;