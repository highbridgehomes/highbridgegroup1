import React from "react";
import { Link } from "react-router-dom";
import "./SoldOutPropertySection.css"; // Add your CSS here

const SoldOutPropertySection = () => {
  return (
    <section className="featured-properties">
      <h2>Our Sold-Out Properties</h2>
      <div className="property-grid">
        {/* Property Cards */}
        <Link to="/cedars-3" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/featured-property1.jpg" alt="Highbridge Heaven" />
            </div>
            <div className="property-back">
              <h3>HIGHBRIDGE CEDARS 2 ESTATE</h3>
              <div className="property-description">
                <p>
                  We deeply appreciate our clients for trusting us with their real estate investment. We are proud to have delivered on their expectations.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>

        <Link to="/cedars" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/featured-property2.jpg" alt="Highbridge Cedars" />
            </div>
            <div className="property-back">
              <h3>HIGHBRIDGE CEDARS ESTATEE</h3>
              <div className="property-description">
                <p>
                  Thank you to our clients for their trust. We're grateful to have met their real estate expectations and to have made their investments a success.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>

        <Link to="/highbridge-county" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/county/COUNTY.jpg" alt="Highbridge County" />
            </div>
            <div className="property-back">
              <h3>HIGHBRIDGE WOODLAND EXTENSION </h3>
              <div className="property-description">
                <p>
                  Our clients’ trust has been our greatest asset. We are honored to have fulfilled their real estate dreams with this successful investment.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>

        <Link to="/highbridge-manor" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/featured-property2.jpg" alt="HighBridge Manor" />
            </div>
            <div className="property-back">
              <h3>HIGHBRIDGE WOODLAND</h3>
              <div className="property-description">
                <p>
                  We are grateful to our clients for entrusting us with their investments. It's been a privilege to deliver this outstanding real estate project.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>

        <Link to="/magistic-lagos" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/featured-property2.jpg" alt="Magestic Lagos" />
            </div>
            <div className="property-back">
              <h3>HIGHBRIDGE OAKLAND ESTATE</h3>
              <div className="property-description">
                <p>
                  We sincerely thank our clients for their trust and support in making this property a resounding success. We’re proud to have met their expectations.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>

        <Link to="/farmcity" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/farmcity/farmcity.jpg" alt="Highbridge Farmcity" />
            </div>
            <div className="property-back">
              <h3>HIGHBRIDGE FARMCITY ESTATE</h3>
              <div className="property-description">
                <p>
                  Our clients' confidence in us has been truly rewarding. We're grateful to have helped them achieve their real estate goals with this estate.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>

        <Link to="/garden" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/farmcity/farmcit.jpg" alt="Highbridge Garden" />
            </div>
            <div className="property-back">
              <h3> HIGHBRIDGE HILLCITY 2 ESTATE</h3>
              <div className="property-description">
                <p>
                  We are thankful to our clients for their trust. It’s been a pleasure to see this property become a success and fulfill their real estate aspirations.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>


        <Link to="/park" className="property-card">
          <div className="property-inner">
            <div className="property-front">
              <img src="/assets/images/farmcity/farmcit.jpg" alt="Highbridge park" />
            </div>
            <div className="property-back">
              <h3> HIGHBRIDGE PARK ESTATE</h3>
              <div className="property-description">
                <p>
                  We are thankful to our clients for their trust. It’s been a pleasure to see this property become a success and fulfill their real estate aspirations.
                </p>
              </div>
              <p>View Full Details</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SoldOutPropertySection;