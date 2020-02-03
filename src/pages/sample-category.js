import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll"

class CategoryPage extends React.Component {
	constructor(props) {
		super(props)
		this.scrollToTop = this.scrollToTop.bind(this)
	}

	componentDidMount() {
		Events.scrollEvent.register("begin", function() {
			console.log("begin", arguments)
		})

		Events.scrollEvent.register("end", function() {
			console.log("end", arguments)
		})
	}
	scrollToTop() {
		scroll.scrollToTop()
	}
	scrollTo() {
		scroller.scrollTo("scroll-to-element", {
			duration: 800,
			delay: 0,
			smooth: "easeInOutQuart",
		})
	}
	scrollToWithContainer() {
		let goToContainer = new Promise((resolve, reject) => {
			Events.scrollEvent.register("end", () => {
				resolve()
				Events.scrollEvent.remove("end")
			})

			scroller.scrollTo("scroll-container", {
				duration: 800,
				delay: 0,
				smooth: "easeInOutQuart",
			})
		})

		goToContainer.then(() =>
			scroller.scrollTo("scroll-container-second-element", {
				duration: 800,
				delay: 0,
				smooth: "easeInOutQuart",
				containerId: "scroll-container",
			})
		)
	}
	componentWillUnmount() {
		Events.scrollEvent.remove("begin")
		Events.scrollEvent.remove("end")
	}

	render() {
		const siteTitle = this.props.data.site.siteMetadata.title
		const siteDescription = this.props.data.site.siteMetadata.description

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="Category" description={siteDescription} />
				<div className="page-content bg-light">
					<div className="container">
						<div className="row justify-content-between">
							{/* sticky sidebar */}
							<div className="col-md-3">
								<div className="sticky-top">
									<div id="menu-top" className="pt-4" />
									<ul className="list-unstyled sticky-sidebar-menu">
										<li>
											<Link
												to="investment-consulting"
												duration={500}
												spy={true}
												smooth={true}
											>
												Consult about Your Investment
											</Link>
										</li>
										<li>
											<Link
												to="guest-communication"
												duration={500}
												spy={true}
												smooth={true}
											>
												Communicate with Guests Smoothly
											</Link>
										</li>
										<li>
											<Link
												to="concierge-service"
												duration={500}
												spy={true}
												smooth={true}
											>
												5-Star Concierge Service
											</Link>
										</li>
										<li>
											<Link
												to="cleaning-maintenance"
												duration={500}
												spy={true}
												smooth={true}
											>
												Cleaning & Maintenance
											</Link>
										</li>
										<li>
											<Link
												to="noise-monitoring"
												duration={500}
												spy={true}
												smooth={true}
											>
												Effective Noise Monitoring
											</Link>
										</li>
										<li>
											<Link
												to="interior-design"
												duration={500}
												spy={true}
												smooth={true}
											>
												Interior Design Improvement
											</Link>
										</li>
										<li>
											<Link
												to="professional-photography"
												duration={500}
												spy={true}
												smooth={true}
											>
												Captivating and Professional Photography
											</Link>
										</li>
										<li>
											<Link
												to="listing-price-optimization"
												duration={500}
												spy={true}
												smooth={true}
											>
												Listing & Price Optimization
											</Link>
										</li>
										<li>
											<Link
												to="on-site-staffing"
												duration={500}
												spy={true}
												smooth={true}
											>
												On-Site Staffing
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-9">
								<div id="single-color-tape-light" className="pt-4">
									<div className="white-block">
										<div className="row pb-4">
											<div className="col-md-4 col-lg-3 mb-4">
												<div className="product-item">
													<a href="#">
														<div className="product-image">
															<div className="v-center">
																<img
																	className="img-fluid p-3"
																	src="_image_framewrx_sco-stage-gt.jpg"
																/>
															</div>
														</div>
													</a>
													<div className="product-desc">
														<div className="pb-3">
															<a className="text-body" href="#">
																<h6 className="font-weight-bold">
																	TLS - Standard Series
																</h6>
															</a>
															<p className="small text-muted">
																12V/24V - 155Lm/ft - 2.7W/ft
															</p>
														</div>
														<div className="product-link">
															<a
																className="btn btn-secondary btn-sm"
																role="button"
																href="#"
															>
																More Info
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4 col-lg-3 mb-4">
												<div className="product-item">
													<a href="#">
														<div className="product-image">
															<div className="v-center">
																<img
																	className="img-fluid p-3"
																	src="_image_framewrx_bol-stage-gt.jpg"
																/>
															</div>
														</div>
													</a>
													<div className="product-desc">
														<div className="pb-3">
															<a className="text-body" href="#">
																<h6 className="font-weight-bold">
																	TLM - Max Run Series
																</h6>
															</a>
															<p className="small text-muted">
																24V - 121Lm/ft - 1.46W/ft
															</p>
														</div>
														<div className="product-link">
															<a
																className="btn btn-secondary btn-sm"
																role="button"
																href="#"
															>
																More Info
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4 col-lg-3 mb-4">
												<div className="product-item">
													<a href="#">
														<div className="product-image">
															<div className="v-center">
																<img
																	className="img-fluid p-3"
																	src="_image_framewrx_sco-stage-gt.jpg"
																/>
															</div>
														</div>
													</a>
													<div className="product-desc">
														<div className="pb-3">
															<a className="text-body" href="#">
																<h6 className="font-weight-bold">
																	TLH - High Output Series
																</h6>
															</a>
															<p className="small text-muted">
																24V - 210Lm/ft - 4.6W/ft
															</p>
														</div>
														<div className="product-link">
															<a
																className="btn btn-secondary btn-sm"
																role="button"
																href="#"
															>
																More Info
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4 col-lg-3 mb-4">
												<div className="product-item">
													<a href="#">
														<div className="product-image">
															<div className="v-center">
																<img
																	className="img-fluid p-3"
																	src="_image_framewrx_bol-stage-gt.jpg"
																/>
															</div>
														</div>
													</a>
													<div className="product-desc">
														<div className="pb-3">
															<a className="text-body" href="#">
																<h6 className="font-weight-bold">
																	TLX - Premium Series
																</h6>
															</a>
															<p className="small text-muted">
																24V - 570Lm/ft - 7.8W/ft
															</p>
														</div>
														<div className="product-link">
															<a
																className="btn btn-secondary btn-sm"
																role="button"
																href="#"
															>
																More Info
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default CategoryPage

export const CategoryPageQuery = graphql`
	query CategoryPageQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`
