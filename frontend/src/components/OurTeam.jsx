import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section id="team" className="team">
      {/* Section Title */}
      <div className="sec-title text-center">
        <h5 className="sec-title__subtitle">Our Team</h5>
        <h2 className="sec-title__title">Meet our team</h2>
        <p className="sec-title__description">
          We are a group of passionate and talented individuals dedicated to
          bringing innovative solutions. Meet the people who make it all
          happen.
        </p>
      </div>

      {/* Team Grid */}
      <div className="container">
        <div className="team__grid">
          {[
            {
              name: "Michael Johnson",
              role: "Developer",
              img: "assets/img/team/img_01.png",
            },
            {
              name: "Nathaniel Lewis",
              role: "Founder & CO",
              img: "assets/img/team/img_02.png",
            },
            {
              name: "Chieke Ikenna",
              role: "Developer",
              img: "assets/img/team/ikenna.png",
            },
            {
              name: "Timothy Young",
              role: "Designer",
              img: "assets/img/team/img_03.png",
            },
            {
              name: "David Williams",
              role: "Consultant",
              img: "assets/img/team/img_04.png",
            },
          ].map((member, index) => (
            <div key={index} className="team__item">
              <div className="avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team__info text-center">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
              <div className="team__social">
                <ul className="team__social-links">
                  <li>
                    <a href="#!">
                      <TiSocialFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <TiSocialTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <TiSocialLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <TiSocialInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;