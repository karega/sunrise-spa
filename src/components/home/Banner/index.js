import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Banner1 from "../../../assets/img/banner3.jpeg";
import Banner2 from "../../../assets/img/banner8.jpeg";

const Banner = () => {
  return (
    <div className="slider-area">
      <OwlCarousel
        className="owl-theme slider-active-1 nav-style-2"
        animateIn="fadeIn"
        animateOut="fadeOut"
        autoplayHoverPause={false}
        autoplay={true}
        loop={true}
        dots={true}
        items={1}
        nav
      >
        <div
          className="single-slider bg-img slider-height-2 align-items-center custom-d-flex"
          style={{ backgroundImage: `url(${Banner1})` }}
        >
          <div className="container">
            <div className="row height-100-percent align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="slider-content-8 slider-animated-1 text-center">
                  <h3 className="animated">Mid Season Sale</h3>
                  <h1 className="animated">up50</h1>
                  <div className="slider-btn-1">
                    <a className="animated">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="single-slider bg-img slider-height-2 align-items-center custom-d-flex"
          style={{ backgroundImage: `url(${Banner2})` }}
        >
          <div className="container">
            <div className="row height-100-percent align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="slider-content-9 slider-animated-1">
                  <h1 className="animated">
                    <span>checkout </span> newCollection{" "}
                  </h1>
                  <div className="slider-btn-1 text-center">
                    <a className="animated">shopNow</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Banner;
