import React from 'react'
import "./Pricing.css"

const Pricing = () => {
	return (
		<>
			<section className="price-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-pricing-content">
								<div className="price-tag">
									<h3>Startup</h3>
								</div>
								<div className="price-heading">
									<div className="price-usd">
										<h2>$29.00 <span className="price-small-text">- Per month</span></h2>
									</div>
								</div>
								<div className="price-body">
									<ul>
										<li>Personal Use</li>
										<li>Unlimited Projects</li>
										<li>Project Management</li>
										<li className="offer-list-none"><del>27/7 Support</del></li>
										<li className="offer-list-none"><del>Basic support on Github</del></li>
										<li className="offer-list-none"><del>Help center access</del></li>
									</ul>
								</div>
								<div className="price-btn"> <a href="#" className="price-btn-one">Get Started</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-pricing-content">
								<div className="price-tag">
									<h3>Standard</h3>
								</div>
								<div className="price-heading">
									<div className="price-usd">
										<h2>$45.00<span className="price-small-text">- Per month</span></h2>
									</div>
								</div>
								<div className="price-body">
									<ul>
										<li>Personal Use</li>
										<li>Unlimited Projects</li>
										<li>Project Management</li>
										<li>27/7 Support</li>
										<li className="offer-list-none"><del>Basic support on Github</del></li>
										<li className="offer-list-none"><del>Help center access</del></li>
									</ul>
								</div>
								<div className="price-btn"> <a href="#" className="price-btn-one">Get Started</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-pricing-content">
								<div className="price-tag">
									<h3>Premium</h3>
								</div>
								<div className="price-heading">
									<div className="price-usd">
										<h2>$75.00<span className="price-small-text">- Per month</span></h2>
									</div>
								</div>
								<div className="price-body">
									<ul>
										<li>Personal Use</li>
										<li>Unlimited Projects</li>
										<li>Project Management</li>
										<li>27/7 Support</li>
										<li>Basic support on Github</li>
										<li>Help center access</li>
									</ul>
								</div>
								<div className="price-btn"> <a href="#" className="price-btn-one">Get Started</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Pricing;

