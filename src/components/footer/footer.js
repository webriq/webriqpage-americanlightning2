import React from "react"
import { Link } from "gatsby"

const footer = props => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-md-3 col-lg-2">
						<h5 className="text-uppercase section-heading">Quick Links</h5>
						<ul className="list-unstyled footer-links">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Mobile Light Lab</a>
							</li>
							<li>
								<a href="#">Catalogs &amp; Materials</a>
							</li>
							<li>
								<a href="#">Where to Buy</a>
							</li>
							<li>
								<a href="#">Customer Support</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-lg-2">
						<h5 className="text-uppercase section-heading">Products</h5>
						<ul className="list-unstyled footer-links">
							<li>
								<a href="#">Trulux</a>
							</li>
							<li>
								<a href="#">Task</a>
							</li>
							<li>
								<a href="#">Downlighting</a>
							</li>
							<li>
								<a href="#">Linear</a>
							</li>
							<li>
								<a href="#">Architectural</a>
							</li>
							<li>
								<a href="#">Seasonal</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-lg-2">
						<h5 className="text-uppercase section-heading">Resources</h5>
						<ul className="list-unstyled footer-links">
							<li>
								<a href="#">Product Guide</a>
							</li>
							<li>
								<a href="#">Quick Ship List</a>
							</li>
							<li>
								<a href="#">Technical Library</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-lg-4">
						<h5 className="text-uppercase section-heading">Connect</h5>
						<ul className="list-unstyled footer-links">
							<li className="pb-3">
								<span className="small d-block">Customer Service</span>
								<a href="tel:18002858051">800.285.8051</a>
							</li>
							<li className="pb-3">
								<span className="small d-block">Technical Support</span>
								<a href="mailto:technicalsupport@american-lighting.com">
									technicalsupport@american-lighting.com
								</a>
							</li>
							<li className="pb-3">
								<span className="small d-block">Sales</span>
								<a href="mailto:sales@american-lighting.com">
									sales@american-lighting.com
								</a>
							</li>
							<li className="pb-3">
								<span className="small d-block">Orders</span>
								<a href="mailto:orders@american-lighting.com">
									orders@american-lighting.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container small text-white-50">
				<div className="row align-items-center">
					<div className="col-12 col-md-6 text-center text-md-left order-2 order-md-1">
						<div>
							<span className="d-block">
								2020 © American Lighting, Inc. All rights reserved.
							</span>
							<span className="d-block copyright">
								Designed and powered by{" "}
								<a href="https://webriq.com/" target="_blank">
									WebriQ
								</a>
								.
							</span>
						</div>
					</div>
					<div className="col-12 col-md-6 text-center text-md-right order-1 order-md-2">
						<div>
							<div className="social-icons">
								<a
									href="https://www.facebook.com/americanlightinginc"
									target="_blank"
								>
									<i className="fa fa-facebook" />
								</a>
								<a
									href="https://www.linkedin.com/company/american-lighting"
									target="_blank"
								>
									<i className="fa fa-linkedin" />
								</a>
								<a
									href="https://www.youtube.com/channel/UCjhQVRx5GgDR4bouEOGmfjw"
									target="_blank"
								>
									<i className="fa fa-youtube" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default footer
