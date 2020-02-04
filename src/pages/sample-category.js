import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll"
import { LazyLoadComponent } from "react-lazy-load-image-component"

//images
import TLSStandard from "../images/sample-products/tls-standard-grade.png"
import TLMMaxRun from "../images/sample-products/tlm-max-run.png"
import TLHHighOutput from "../images/sample-products/tlh-high-output.png"
import TLXPremiumGrade from "../images/sample-products/tlx-premium-grade.png"
import TLSTuning from "../images/sample-products/tls-tunable.png"
import TLXTuning from "../images/sample-products/tlx-tunable.png"
import TLDTuning from "../images/sample-products/tld-tunable.png"
import PixelRGBSeries from "../images/sample-products/pixel-rgb-series.png"
import RGBSeries from "../images/sample-products/rgb-series.png"
import RGBWSeries from "../images/sample-products/rgbw-series.png"
import RGBTWSeries from "../images/sample-products/rgbtw-series.png"

//carousel
import PrizmCarousel from "../components/categoryCarousel/prizmTapeLight"

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
				<LazyLoadComponent>
					<PrizmCarousel />
				</LazyLoadComponent>
				<div className="py-10 bg-light">
					<div className="container">
						<div className="row justify-content-between">
							{/* sticky sidebar */}
							<div className="col-md-3">
								<div className="category-sidebar">
									<div className="sticky-top">
										<div>
											<span className="small text-uppercase font-weight-bold text-muted d-block">
												Category
											</span>
											<h3>Prizm Tape Light</h3>
										</div>
										<div id="menu-top" className="pt-4" />
										<ul className="list-unstyled sticky-sidebar-categories">
											<li>
												<Link
													to="single-color-tape-light"
													duration={500}
													spy={true}
													smooth={true}
												>
													Single Color Tapelight
												</Link>
												<span className="item-count">4</span>
											</li>
											<li>
												<Link
													to="tunable-cct-tape-light"
													duration={500}
													spy={true}
													smooth={true}
												>
													Tunable CCT Tape Light
												</Link>
												<span className="item-count">3</span>
											</li>
											<li>
												<Link
													to="rgb-tape-light"
													duration={500}
													spy={true}
													smooth={true}
												>
													RGB Tape Light
												</Link>
												<span className="item-count">3</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-9">
								<div id="single-color-tape-light" className="scroll-spacer">
									<h5 className="subcategory-heading">
										Single Color Tape Light
									</h5>
									<div className="row">
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={TLSStandard}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																TLS - Standard Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															12V/24V - 155Lm/ft - 2.7W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={TLMMaxRun}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																TLM - Max Run Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 121Lm/ft - 1.46W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={TLHHighOutput}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																TLH - High Output Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 210Lm/ft - 4.6W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={TLXPremiumGrade}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																TLX - Premium Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 570Lm/ft - 7.8W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="tunable-cct-tape-light" className="scroll-spacer">
									<h5 className="subcategory-heading">
										Tunable CCT 2700K-6000K Tape Light
									</h5>
									<div className="row">
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={TLSTuning}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																TLS - Tuning Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 155Lm/ft - 2.9W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={TLXTuning}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																TLX - Tuning Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 365Lm/ft - 7W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={TLDTuning}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																TLD - Tuning Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 325Lm/ft - 5.8W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="rgb-tape-light" className="scroll-spacer">
									<h5 className="subcategory-heading">
										RGB Color Mixing Tape Light
									</h5>
									<div className="row">
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={PixelRGBSeries}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">
																Pixel RGB Series
															</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 4.6W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={RGBSeries}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">RGB Series</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 4.6W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={RGBWSeries}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">RGBW Series</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 370Lm/ft - 4.6W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-lg-3 mb-4">
											<div className="product-item">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																className="img-fluid"
																src={RGBTWSeries}
																alt=""
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold">RGBTW Series</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 360Lm/ft - 7W/ft
														</p>
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
