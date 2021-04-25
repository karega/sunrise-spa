import "./PageHome.scss";
import jeans from "../../../assets/img/jeans1.jpeg";
import sho from "../../../assets/img/sho3.jpeg";
import acc from "../../../assets/img/acc.jpeg";
import s3 from "../../../assets/img/s3.jpeg";
import Banner from "../Banner/index";

const PageHome = () => {
  return (
    <span>
      <Banner />

      <div className="banner-area pt-30">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <a>
                    <img src={jeans} alt="banner" />
                    <div className="banner-content">
                      <h3>WOMEN JEANS</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <a>
                    <img src={sho} alt="banner" />
                    <div className="banner-content">
                      <h3>SNEAKERS</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <a>
                    <img src={acc} alt="banner" />
                    <div className="banner-content">
                      <h3>ACCESSORIES</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div
                className="banner-wrap mb-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="banner-img banner-hover banner-zoom">
                  <a>
                    <img src={s3} alt="banner" />
                    <div className="banner-content">
                      <h3>BATHING SUITS</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-icon">
                  <i className="las la-shipping-fast"></i>
                </div>
                <div className="service-content">
                  <h6>Free Worldwide Shipping</h6>
                  <p>On all orders over 100 $</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-icon">
                  <i className="las la-coins"></i>
                </div>
                <div className="service-content">
                  <h6>30 Days Money Returns</h6>
                  <p>30 days money back guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-icon">
                  <i className="las la-headphones"></i>
                </div>
                <div className="service-content">
                  <h6>Support 24/7</h6>
                  <p>Offered in the country of usage</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="service-wrap mb-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="service-icon">
                  <i className="las la-shield-alt"></i>
                </div>
                <div className="service-content">
                  <h6>100% Secure Checkout</h6>
                  <p>Paypal / Visa / Master Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default PageHome;
