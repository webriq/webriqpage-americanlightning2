import React from "react"
import { Link } from "gatsby"

const footer = props => {
	return (
		<footer>
			<div className="subscribe-section">
				<div className="container">
					<div className="row no-gutters justify-content-between align-items-center">
						<div className="col-md-6">
							<h4 className="font-weight-bold">Subscribe to our newsletter.</h4>
							<p className="mb-0">
								Enter your email address to get our latest updates straight to
								your inbox.
							</p>
						</div>
						<div className="col-md-5">
							<form className="subscribe-form">
								<div className="form-group">
									<input
										type="email"
										className="form-control"
										required={true}
										id="footeremail"
									/>
									<label htmlFor="footeremail">Email address</label>
								</div>
								<div className="form-group">
									<button className="btn subscribe-btn" type="submit">
										SUBSCRIBE
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-md-3 col-lg-2">
							<h5 className="text-uppercase section-heading">Quick Links</h5>
							<ul className="list-unstyled footer-links">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/">About Us</Link>
								</li>
								<li>
									<Link to="/">Mobile Light Lab</Link>
								</li>
								<li>
									<Link to="/">Catalogs &amp; Materials</Link>
								</li>
								<li>
									<Link to="/">Where to Buy</Link>
								</li>
								<li>
									<Link to="/">Customer Support</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-lg-2">
							<h5 className="text-uppercase section-heading">Products</h5>
							<ul className="list-unstyled footer-links">
								<li>
									<Link to="/">Trulux</Link>
								</li>
								<li>
									<Link to="/">Task</Link>
								</li>
								<li>
									<Link to="/">Downlighting</Link>
								</li>
								<li>
									<Link to="/">Linear</Link>
								</li>
								<li>
									<Link to="/">Architectural</Link>
								</li>
								<li>
									<Link to="/">Seasonal</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-lg-2">
							<h5 className="text-uppercase section-heading">Resources</h5>
							<ul className="list-unstyled footer-links">
								<li>
									<Link to="/">Product Guide</Link>
								</li>
								<li>
									<Link to="/">Quick Ship List</Link>
								</li>
								<li>
									<Link to="/">Technical Library</Link>
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
									<a
										href="https://webriq.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
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
										rel="noopener noreferrer"
									>
										<i className="fa fa-facebook" />
									</a>
									<a
										href="https://www.linkedin.com/company/american-lighting"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-linkedin" />
									</a>
									<a
										href="https://www.youtube.com/channel/UCjhQVRx5GgDR4bouEOGmfjw"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-youtube" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default footer
