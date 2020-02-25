import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Accordion, Card, Button } from "react-bootstrap/"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

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

//images
import Image1 from "../images/senik-wwa40-bk548x450.png"
import Image2 from "../images/senik-wwa40-bk-crop-u176936.png"
import Image3 from "../images/senik a40 3set_alt.png"
import Image4 from "../images/senik a40 3set.png"

//carousel
// import PrizmCarousel from "../components/carousels/categoryCarousels/prizmTapeLight"

class CategoryPage extends React.Component {
	componentDidMount() {
		function handleClicked(e) {
			for (var i = 0; i < coolButton.length; i++) {
				coolButton[i].classList.remove("active")
			}
			e.target.classList.add("active")
		}

		var coolButton = document.getElementsByClassName("accordion-label")

		for (var i = 0; i < coolButton.length; i++) {
			coolButton[i].addEventListener("click", handleClicked)
		}
	}
	render() {
		const siteTitle = this.props.data.site.siteMetadata.title
		const siteDescription = this.props.data.site.siteMetadata.description

		const carousel = {
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: true,
			loop: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				nextEl: "#next",
				prevEl: "#prev",
			},
		}

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="Category" description={siteDescription} />
				<div className="product-carousel">
					<div className="swiper-nav v-center" style={{ zIndex: "2" }}>
						<div className="swiper-arrow-left" id="prev">
							<i className="fa fa-angle-left" />
						</div>
						<div className="swiper-arrow-right" id="next">
							<i className="fa fa-angle-right" />
						</div>
					</div>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-9">
								<LazyLoadComponent>
									<Swiper {...carousel}>
										<div className="product-carousel-slide">
											<img src={Image1} alt="" className="img-fluid v-center" />
										</div>
										<div className="product-carousel-slide">
											<img src={Image2} alt="" className="img-fluid v-center" />
										</div>
										<div className="product-carousel-slide">
											<img src={Image3} alt="" className="img-fluid v-center" />
										</div>
										<div className="product-carousel-slide">
											<img src={Image4} alt="" className="img-fluid v-center" />
										</div>
									</Swiper>
								</LazyLoadComponent>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-5 pb-10">
					<div className="container">
						<div className="row justify-content-between">
							{/* sticky sidebar */}
							<div className="col-md-3">
								<div className="category-sidebar">
									<div className="sticky-top">
										<span className="text-uppercase font-weight-bold">
											Prizm Tape Light
										</span>{" "}
										| <span className="text-primary">Reset</span>
										<div className="category-accordion-wrapper">
											<Accordion>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="1"
															className="accordion-label"
														>
															Product Type
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="1">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="2"
															className="accordion-label"
														>
															CCT / Color
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="2">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="3"
															className="accordion-label"
														>
															Lumens / Foot
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="3">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="4"
															className="accordion-label"
														>
															Wattage / Foot
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="4">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="5"
															className="accordion-label"
														>
															Max Run Length
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="5">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="6"
															className="accordion-label"
														>
															Cutting Increments
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="6">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="7"
															className="accordion-label"
														>
															Input Voltage
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="7">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Card.Header>
														<Accordion.Toggle
															as={Button}
															variant="link"
															eventKey="8"
															className="accordion-label"
														>
															Environment / IP Rating
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="8">
														<Card.Body>
															<span className="subcategory">Option 1</span>
															<span className="subcategory">Option 2</span>
															<span className="subcategory">Option 3</span>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-9">
								<div id="single-color-tape-light" className="scroll-spacer">
									<h5 className="subcategory-heading">
										Single Color Tape Light
									</h5>
									<div className="row no-gutters">
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
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
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
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
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
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
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
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
									<div className="row no-gutters">
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product-with-splash">
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
														<Link
															className="text-body"
															to="/sample-product-with-splash"
														>
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
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product-with-splash">
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
														<Link
															className="text-body"
															to="/sample-product-with-splash"
														>
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
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product-with-splash">
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
														<Link
															className="text-body"
															to="/sample-product-with-splash"
														>
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
									<div className="row no-gutters">
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
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
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
															<h6 className="font-weight-bold">RGB Series</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 4.6W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
															<h6 className="font-weight-bold">RGBW Series</h6>
														</Link>
														<p className="small text-muted mb-0">
															24V - 370Lm/ft - 4.6W/ft
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-6 col-md-3">
											<div className="product-item">
												<Link to="/sample-product">
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
														<Link className="text-body" to="/sample-product">
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
