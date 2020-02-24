import React from "react"
import { LazyLoadComponent } from "react-lazy-load-image-component"

class Support extends React.Component {
	render() {
		return (
			<LazyLoadComponent>
				<div className="about-section py-10">
					<div className="container">
						<div className="row justify-content-around">
							{/*<div className="col-lg-5">
								<div className="col-img-bg">
									<img src={About} alt="" />
								</div>
							</div>*/}
							<div className="col-lg-4">
								<h2 className="section-heading">Support</h2>
								<ul
									className="list-unstyled footer-links"
									style={{ position: "relative", zIndex: "1" }}
								>
									<li className="pb-3">
										<h6 className="font-weight-bold text-uppercase">
											Customer Service
										</h6>
										<a href="tel:18002858051">800.285.8051</a>
									</li>
									<li className="pb-3">
										<h6 className="font-weight-bold text-uppercase">
											Technical Support
										</h6>
										<a href="mailto:technicalsupport@american-lighting.com">
											technicalsupport@american-lighting.com
										</a>
									</li>
									<li className="pb-3">
										<h6 className="font-weight-bold text-uppercase">Sales</h6>
										<a href="mailto:sales@american-lighting.com">
											sales@american-lighting.com
										</a>
									</li>
									<li className="pb-3">
										<h6 className="font-weight-bold text-uppercase">Orders</h6>
										<a href="mailto:orders@american-lighting.com">
											orders@american-lighting.com
										</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<h2 className="section-heading">Forms</h2>
								<ul
									className="list-unstyled footer-links"
									style={{ position: "relative", zIndex: "1" }}
								>
									<li className="pb-3">
										<h6 className="font-weight-bold text-uppercase">
											Credit Application
										</h6>
										<p>
											<a href="/">Click here to download</a> this form to apply
											for a credit line with American Lighting. This form is
											only processed for an established account upon request or
											with an order.
										</p>
									</li>
									<li className="pb-3">
										<h6 className="font-weight-bold text-uppercase">
											Credit Card Authorization
										</h6>
										<p>
											<a href="/">Click here to download</a> this form to
											approve use of your credit card by American Lighting.
										</p>
									</li>
									<li className="pb-3">
										<h6 className="font-weight-bold text-uppercase">
											RGA Request / Price Dispute / Freight Credit
										</h6>
										<p>
											<a href="/">Click here</a> to use our RGA/Price
											Dispute/Freight Credit form. Please use this form for any
											pricing issues, freight charges or product that you need
											to return for credit or replacement.
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</LazyLoadComponent>
		)
	}
}

export default Support
