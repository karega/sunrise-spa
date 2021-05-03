import React from "react";

const Services = () => {
	return (
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
	);
};

export default Services;
