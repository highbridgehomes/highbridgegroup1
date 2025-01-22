import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'; // Importing a bold star icon
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-content">
          <div className="text-content">
            <h1>About Us</h1>
            <p>
              Welcome to Highbridge Homes, a company committed to creating exceptional homes
              that reflect the true essence of luxury and comfort. With years of experience in the
              real estate industry, we take pride in our craftsmanship, attention to detail, and
              dedication to customer satisfaction.
            </p>

            <div className="image-content">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/vkF__wRUFKA" 
                  title="Highbridge Homes Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>

            <div className="our-values">
              <h2>Our Vision At Highbridge Homes Limited</h2>
              <p>
                To build high-quality, sustainable homes that enhance the living experience and
                meet the evolving needs of our customers. We provide the most professional, informative, 
                loyal, and dedicated service in the Real Estate sector. The best interests and concerns of our 
                clients will always come first on our daily priorities and routine. Our vision is to be the 
                most client-centric organization, to build best-in-class platforms where clients can come to find 
                and discover every need in Real Estate.
              </p>
              <h2>Our Mission</h2>
              <p>
                To be the leading real estate developer, known for innovation, trust, and a
                commitment to the community. Our team approach philosophy ensures your needs are
                important to each and every member of our organization, thereby creating unparalleled
                opportunities for all our clients looking to own or sell Real Estate. We are most 
                dedicated to the development of long-term client relationships, and we are committed to delivering
                the dream of affordable luxury homes.
              </p>

              

              {/* Our Objectives Section */}
              <h2>Our Objectives</h2>
              <p>
                At Highbridge Homes, we are committed to achieving several key objectives that will guide us in
                providing quality service and innovative solutions for our clients. These objectives help us maintain
                our vision of being a trusted leader in real estate development, while ensuring that we meet the needs
                of every individual client.
              </p>
              <ul className="objectives-list">
                <li><AiOutlineStar className="objective-icon" /> To provide exceptional customer service with a focus on personalized attention.</li>
                <li><AiOutlineStar className="objective-icon" /> To build homes that promote sustainable living, reducing environmental impact.</li>
                <li><AiOutlineStar className="objective-icon" /> To create innovative designs that combine modern living with comfort and luxury.</li>
                <li><AiOutlineStar className="objective-icon" /> To continuously improve our processes to deliver homes faster and more efficiently.</li>
                <li><AiOutlineStar className="objective-icon" /> To foster strong relationships with clients and partners, based on trust and transparency.</li>
                <li><AiOutlineStar className="objective-icon" /> To contribute positively to the communities we serve through corporate social responsibility initiatives.</li>
              </ul>

             

              {/* Our Awards Section */}
              <h2>Our Awards</h2>
              <p>
                Over the years, Highbridge Homes has received several prestigious awards for our dedication to excellence, 
                innovation, and commitment to the real estate sector. Here are some of the awards we've proudly received:
              </p>

               {/* Image after the Awards Section */}
            <div className="image-after-awards">
              <img src="/assets/images/award/awardpics.jpg" alt="Highbridge Homes" />
            </div>
              <ul className="awards-list">
                <li><AiOutlineStar className="award-icon" /> <span className="award-year">2016</span> - Youngest Developer Award</li>
                <li><AiOutlineStar className="award-icon" /> <span className="award-year">2019</span> - National Outstanding Leadership</li>
                <li><AiOutlineStar className="award-icon" /> <span className="award-year">2020</span> - Excellence Icony Award</li>
                <li><AiOutlineStar className="award-icon" /> <span className="award-year">2021</span> - Affordable Real Estate Promoter of the Year Award</li>
                <li><AiOutlineStar className="award-icon" /> <span className="award-year">2022</span> - Fastest Growing Real Estate of the Year Award</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;