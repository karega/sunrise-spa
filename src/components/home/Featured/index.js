import React from "react";

import jeans from "../../../assets/img/jeans1.jpeg";
import sho from "../../../assets/img/sho3.jpeg";
import acc from "../../../assets/img/acc.jpeg";
import s3 from "../../../assets/img/s3.jpeg";

const Featured = () => {
	return (
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
									<img src={jeans} alt="banner"/>
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
									<img src={sho} alt="banner"/>
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
									<img src={acc} alt="banner"/>
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
									<img src={s3} alt="banner"/>
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
	);
};

export default Featured;
