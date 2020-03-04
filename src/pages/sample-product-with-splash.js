import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import { Accordion, Card, Button } from "react-bootstrap/"

//images
import SenikLogo from "../images/senik-logo.svg"
import Image1 from "../images/senik-wwa40-bk548x450.png"
import Image2 from "../images/senik-wwa40-bk-crop-u176936.png"
import Image3 from "../images/senik a40 3set_alt.png"
import Image4 from "../images/senik a40 3set.png"

import RelatedItems from "../components/RelatedItems"

class ProductPageSplash extends React.Component {
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
				<SEO title="SÉNIK A40X" description={siteDescription} />
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
				<div className="py-10">
					<div className="container">
						<div className="pb-4 product-name-logo">
							<img src={SenikLogo} height="32px" alt="SÉNIK" />
							<h3 className="d-inline-block text-primary mb-0 px-3">
								A40X Array Series
							</h3>
						</div>
						<div className="row justify-content-between">
							<div className="col-lg-6">
								<p>
									The Sēnik A40X is a premium high-performance option for any
									exterior long-throw array intended for taller buildings or
									facades, bridges, and large structures. Featuring multiple
									beam pattern options, the A40X is perfect for floodlighting,
									spotlighting, wall washing, with optimum efficiency housed in
									a rugged die-cast aluminum housing.
								</p>
								<ul className="styled-list">
									<li>Voltage input: 100-240V AC, 50/60Hz</li>
									<li>Ranging from 4000-9100 lumens per fixture performance</li>
									<li>
										CCT & Color range: 2700K, 3000K, 4000K, 5000K, 6000K, RGB,
										RGBW
									</li>
									<li>Finish options: Black / White / Silver</li>
									<li>Smooth full range dimming capabilities (0-100%)</li>
									<li>180° Swivel adjustment capable</li>
									<li>
										Linkable up to 5 units (Max signal linking: 30 fixtures)
									</li>
									<li>
										Data protocol: DMX 512 (RDM required for fixture addressing)
									</li>
									<li>20° Optics (Standard) / 40° optics (Special Order)</li>
								</ul>
							</div>
							<div className="col-lg-6 small">
								<div className="basic-accordion-wrapper product-accordion">
									<Accordion>
										<Card>
											<Card.Header>
												<Accordion.Toggle
													as={Button}
													variant="link"
													eventKey="1"
													className="accordion-label"
												>
													Quick Specs
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey="1">
												<Card.Body>
													<div className="row">
														<div className="col-4">
															<strong>Series</strong>
														</div>
														<div className="col-8">TLM</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Voltage</strong>
														</div>
														<div className="col-8">24V</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>CCT</strong>
														</div>
														<div className="col-8">
															2400K / 2700K / 3000K / 4000K
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>CRI</strong>
														</div>
														<div className="col-8">90+</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Wattage</strong>
														</div>
														<div className="col-8">1.46W per ft</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Lumens</strong>
														</div>
														<div className="col-8">Up to 121Lm per ft</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Max Run</strong>
														</div>
														<div className="col-8">65.6ft</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Cuttable</strong>
														</div>
														<div className="col-8">Every 1.97"</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>IP Rating</strong>
														</div>
														<div className="col-8">IP54 (unjacketed)</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Dimmable</strong>
														</div>
														<div className="col-8">
															(5-100%) with most dimmers
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Rating</strong>
														</div>
														<div className="col-8">cULus Listed</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>Rated Life</strong>
														</div>
														<div className="col-8">50,000 hrs</div>
													</div>
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
													Accessories
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey="2">
												<Card.Body>
													<div className="row">
														<div className="col-4">
															<span className="font-weight-bold text-uppercase text-muted">
																Item Number
															</span>
														</div>
														<div className="col-8">
															<span className="font-weight-bold text-uppercase text-muted">
																Description
															</span>
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-CONKIT</strong>
														</div>
														<div className="col-8">
															Trulink 4-in-1 Connector Power Feed
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-BLKS</strong>
														</div>
														<div className="col-8">
															Trulink 4-in-1 Connector Block
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2SPL</strong>
														</div>
														<div className="col-8">Splice Connector</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2L</strong>
														</div>
														<div className="col-8">L - Snap Connector</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2T</strong>
														</div>
														<div className="col-8">T - Snap Connector</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2X</strong>
														</div>
														<div className="col-8">X - Snap Connector</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2JUMP-.5</strong>
														</div>
														<div className="col-8">6" Linking Cable (IP54)</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2JUMP-1</strong>
														</div>
														<div className="col-8">
															12" Linking Cable (IP54)
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2JUMP-2</strong>
														</div>
														<div className="col-8">
															24" Linking Cable (IP54)
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2JUMP65-.5</strong>
														</div>
														<div className="col-8">6" Linking Cable (IP65)</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2JUMP65-1</strong>
														</div>
														<div className="col-8">
															12" Linking Cable (IP65)
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2JUMP65-2</strong>
														</div>
														<div className="col-8">
															24" Linking Cable (IP65)
														</div>
													</div>
													<div className="row">
														<div className="col-4">
															<strong>TL-2DC</strong>
														</div>
														<div className="col-8">
															Snap Connector to DC Jack
														</div>
													</div>
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
													IES / Photometrics
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey="3">
												<Card.Body>
													<span className="font-weight-bold">
														Please contact factory for additional information.
													</span>
												</Card.Body>
											</Accordion.Collapse>
										</Card>
									</Accordion>
								</div>
								<div className="pt-4">
									<h6 className="font-weight-bold">CCT & Color Options</h6>
									<div className="pt-3">
										<div className="text-center d-inline-block pr-4">
											<img src="/img/swatches/2700k swatch.png" alt="" />
											<span className="d-block font-weight-bold">2700K</span>
										</div>
										<div className="text-center d-inline-block pr-4">
											<img src="/img/swatches/3000k swatch.png" alt="" />
											<span className="d-block font-weight-bold">300K</span>
										</div>
										<div className="text-center d-inline-block pr-4">
											<img src="/img/swatches/4000k swatch.png" alt="" />
											<span className="d-block font-weight-bold">400K</span>
										</div>
										<div className="text-center d-inline-block pr-4">
											<img src="/img/swatches/5000k swatch.png" alt="" />
											<span className="d-block font-weight-bold">500K</span>
										</div>
										<div className="text-center d-inline-block pr-4">
											<img src="/img/swatches/6000k swatch.png" alt="" />
											<span className="d-block font-weight-bold">600K</span>
										</div>
										<div className="text-center d-inline-block pr-4">
											<img
												src="/img/swatches/rgb-icon.svg"
												height="33px"
												alt=""
											/>
											<span className="d-block font-weight-bold">RGB</span>
										</div>
										<div className="text-center d-inline-block pr-4">
											<img
												src="/img/swatches/rgbw-icon.svg"
												height="33px"
												alt=""
											/>
											<span className="d-block font-weight-bold">RGBW</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<LazyLoadComponent>
					<RelatedItems />
				</LazyLoadComponent>
			</Layout>
		)
	}
}

export default ProductPageSplash

export const ProductPageSplashQuery = graphql`
	query ProductPageSplashQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`
