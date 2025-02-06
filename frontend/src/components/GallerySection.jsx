import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./GallerySection.css"; // Ensure you create this CSS file

const videoUrls = [
  "https://www.youtube.com/watch?v=vkF__wRUFKA",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=3JZ_D3ELwOQ"
];

const imageUrls = [
  "/assets/images/gallery1.jpg",
  "/assets/images/gallery2.jpg",
  "/assets/images/gallery3.jpg",
  "/assets/images/gallery4.jpg",
];

const GallerySection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {/* Video Carousel */}
        <div className="video-carousel">
          <Slider {...sliderSettings}>
            {videoUrls.map((url, index) => (
              <div key={index} className="video-wrapper">
                <ReactPlayer 
                  url={url} 
                  controls 
                  width="100%" 
                  height="250px"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Image Carousel */}
        <div className="image-carousel">
          <Slider {...sliderSettings}>
            {imageUrls.map((url, index) => (
              <div key={index} className="image-wrapper">
                <img src={url} alt={`Gallery ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;