import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"
const footer = props => {
	return (
		<footer>
			{/*<div className="subscribe-section">
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
			</div>*/}
			<div className="footer">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-md-6 col-lg-6">
							<h5 className="text-uppercase section-heading">Resources</h5>
							<div className="row">
								<div className="col-md-6">
									<ul className="list-unstyled footer-links">
										<li>
											<Link to="/">Home</Link>
										</li>
										<li>
											<Link to="/about-us">About Us</Link>
										</li>
										<li>
											<Link to="/mobile-light-lab/">Mobile Light Lab</Link>
										</li>

										<li>
											<Link to="/literature-and-media/">
												Literature & Media
											</Link>
										</li>
										<li>
											<Link to="/where-to-buy">Where to Buy</Link>
										</li>
										<li>
											<Link to="/support">Customer Support</Link>
										</li>
									</ul>
								</div>
								<div className="col-md-6">
									<ul className="list-unstyled footer-links">
										{/*<li>
											<Link to="/literature-and-media">
												Catalogs &amp; Materials
											</Link>
										</li>*/}
										<li>
											<Link to="/about-us">Company</Link>
										</li>
										<li>
											<Link to="/">Warranties</Link>
										</li>
										<li>
											<Link to="/">Rep Login</Link>
										</li>
										<li>
											<Link to="/">Quick Ship List</Link>
										</li>
										<li>
											<Link to="/">Technical Library</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-lg-2">
							<h5 className="text-uppercase section-heading">Products</h5>
							<ul className="list-unstyled footer-links">
								{props.categories.map(cat => (
									<li key={cat.node.title}>
										<Link to={`/${slugify(cat.node.title.toLowerCase())}`}>
											{cat.node.shortname}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="col-md-3 col-lg-4">
							<h5 className="text-uppercase section-heading d-inline-block">
								Connect
							</h5>
							<div className=" d-inline-block">
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
							<ul
								className="list-unstyled footer-links"
								style={{ position: "relative", zIndex: "1" }}
							>
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
						<div className="col-md-12">
							<div className="newsletter-subscribe-form-wrapper">
								<h6 className="font-weight-bold text-primary d-inline-block mr-3">
									Stay in the know with our newsletter!
								</h6>
								<form className="subscribe-form d-inline-block">
									<div className="form-group d-inline-block mr-2">
										<input
											type="email"
											className="form-control"
											required={true}
											id="footeremail"
										/>
										<label htmlFor="footeremail">Your email address</label>
									</div>
									<div className="form-group d-inline-block">
										<button className="btn subscribe-btn" type="submit">
											SUBSCRIBE
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="copyright-text">
						<span className="text-white-50 small">
							2020 © American Lighting, Inc. All rights reserved.
						</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default footer
