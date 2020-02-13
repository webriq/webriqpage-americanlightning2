import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import marked from "marked"
//images
import SenikLogo from "../images/senik-logo.svg"

class ProductPageSplashTemplate extends React.Component {
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
		console.log(this.props.data)
		const product = this.props.data.sanityProduct
		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title={product.title} description={siteDescription} />
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
										{product.productImage.map(prdctImg => (
											<div
												className="product-carousel-slide"
												key={prdctImg.image.asset.id}
											>
												<img
													src={prdctImg.image.asset.fluid.src}
													alt=""
													className="img-fluid v-center"
												/>
											</div>
										))}
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
								{product.title}
							</h3>
						</div>
						<div className="row justify-content-between small">
							<div className="col-lg-6">
								<div>{product.description}</div>
								<div
									dangerouslySetInnerHTML={{
										__html: marked(product.productDetails),
									}}
								/>
							</div>

							<div className="col-lg-6">
								<Accordion>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="0">
											<div className="accordion-heading">Quick Specs</div>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="0">
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
										<Accordion.Toggle as={Card.Header} eventKey="1">
											<div className="accordion-heading">Accessories</div>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="1">
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
													<div className="col-8">12" Linking Cable (IP54)</div>
												</div>
												<div className="row">
													<div className="col-4">
														<strong>TL-2JUMP-2</strong>
													</div>
													<div className="col-8">24" Linking Cable (IP54)</div>
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
													<div className="col-8">12" Linking Cable (IP65)</div>
												</div>
												<div className="row">
													<div className="col-4">
														<strong>TL-2JUMP65-2</strong>
													</div>
													<div className="col-8">24" Linking Cable (IP65)</div>
												</div>
												<div className="row">
													<div className="col-4">
														<strong>TL-2DC</strong>
													</div>
													<div className="col-8">Snap Connector to DC Jack</div>
												</div>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="2">
											<div className="accordion-heading">
												IES / Photometrics
											</div>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="2">
											<Card.Body>
												<span className="font-weight-bold">
													Please contact factory for additional information.
												</span>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
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
			</Layout>
		)
	}
}

export default ProductPageSplashTemplate

export const ProductPageSplashTemplateQuery = graphql`
	query ProductPageSplashTemplateQuery($id: String!) {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
		sanityProduct(id: { eq: $id }) {
			id
			title
			description
			productDetails
			productImage {
				title
				image {
					asset {
						id
						fluid {
							src
						}
					}
				}
			}
		}
	}
`
