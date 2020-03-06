import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import { Accordion, useAccordionToggle, Card } from "react-bootstrap/"
import marked from "marked"
import RelatedItems from "../components/RelatedItems"
//images
import SenikLogo from "../images/senik-logo.svg"

function CustomToggle({ children, eventKey }) {
	const [buttonClass, setButtonClass] = useState(false)
	const decoratedOnClick = useAccordionToggle(eventKey, () =>
		setButtonClass(buttonClass + 1)
	)
	console.log("buttonClass", buttonClass)

	return (
		<button
			type="button"
			className={`${
				buttonClass
					? "accordion-label btn btn-link active"
					: "accordion-label btn btn-link"
			}`}
			onClick={decoratedOnClick}
		>
			{children}
		</button>
	)
}

function ProductAccordion(props) {
	console.log("product", props)
	const { specs, accessories, alldownload, video, order } = props
	return (
		<Accordion>
			{props.specs.length !== 0 ? (
				<Card>
					<Card.Header>
						<CustomToggle eventKey="specs">Quick Specs</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="specs">
						<Card.Body>
							<div className="row">
								<div className="col-4">
									<strong>Series</strong>
								</div>
								<div className="col-8">
									{specs[0].series ? specs[0].series : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Voltage</strong>
								</div>
								<div className="col-8">
									{specs[0].voltage ? specs[0].voltage : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>CCT</strong>
								</div>
								<div className="col-8">
									{specs[0].cct.length !== 0
										? specs[0].cct.map(cct => (
												<li className="d-inline" key={cct._key}>
													<span>/ </span>
													{cct.cct}{" "}
												</li>
										  ))
										: "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>CRI</strong>
								</div>
								<div className="col-8">
									{specs[0].cri ? specs[0].cri : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Wattage</strong>
								</div>
								<div className="col-8">
									{specs[0].wattage ? specs[0].wattage : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Lumens</strong>
								</div>
								<div className="col-8">
									{specs[0].lumens ? specs[0].lumens : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Max Run</strong>
								</div>
								<div className="col-8">
									{specs[0].maxRun ? specs[0].maxRun : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Cuttable</strong>
								</div>
								<div className="col-8">
									{specs[0].cuttable ? specs[0].cuttable : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>IP Rating</strong>
								</div>
								<div className="col-8">
									{specs[0].ipRating ? specs[0].ipRating : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Dimmable</strong>
								</div>
								<div className="col-8">
									{specs[0].dimmable ? specs[0].dimmable : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Rating</strong>
								</div>
								<div className="col-8">
									{specs[0].rating ? specs[0].rating : "N/A"}
								</div>
							</div>
							<div className="row">
								<div className="col-4">
									<strong>Rated Life</strong>
								</div>
								<div className="col-8">
									{specs[0].ratedLife ? specs[0].ratedLife : "N/A"}
								</div>
							</div>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			) : null}
			{props.accessories.length !== 0 ? (
				<Card>
					<Card.Header>
						<CustomToggle eventKey="accessories">Accessories</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="accessories">
						<Card.Body>
							<div className="row">
								<div className="col-4">
									<span className="font-weight-bold text-uppercase text-muted">
										Item
									</span>
								</div>
								<div className="col-8">
									<span className="font-weight-bold text-uppercase text-muted">
										Description
									</span>
								</div>
							</div>

							{accessories.map(accs => (
								<div className="row" key={accs._key}>
									<div className="col-4">
										<strong>{accs.itemNumber}</strong>
									</div>
									<div className="col-8">{accs.description}</div>
								</div>
							))}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			) : null}

			{props.order.length !== 0 ? (
				<Card>
					<Card.Header>
						<CustomToggle eventKey="order">Order</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="order">
						<Card.Body>
							{order.map(ord => (
								<div className="row" key={ord._key}>
									<div className="col-md-12 text-center">
										<span className="font-weight-bold text-uppercase text-muted">
											{ord.title}
										</span>
									</div>
									<div
										className="col-md-12"
										dangerouslySetInnerHTML={{ __html: marked(ord.body) }}
									/>
								</div>
							))}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			) : null}
			{props.alldownload.length !== 0 ? (
				<Card>
					<Card.Header>
						<CustomToggle eventKey="alldownload">All Downloads</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="alldownload">
						<Card.Body>
							{alldownload.map(dwnld => (
								<div className="row" key={dwnld._key}>
									<div className="col-md-12">
										<span className="font-weight-bold text-uppercase text-muted">
											{dwnld.title}
										</span>
										{dwnld.pdfinfo.map(info => (
											<div className="row" key={info._key}>
												<div className="col-12">
													{info.file ? (
														<a
															href={info.file.asset.url}
															target="_blank"
															rel="noopener noreferrer"
														>
															{info.title}
														</a>
													) : (
														<p>{info.title}</p>
													)}
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			) : null}
			{props.video.length !== 0 ? (
				<Card>
					<Card.Header>
						<CustomToggle eventKey="videos">Videos</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="videos">
						<Card.Body>
							{video.map(vid => (
								<div className="row" key={video._key}>
									<div className="col-md-12">
										<span className="font-weight-bold text-uppercase text-muted">
											<a
												href={vid.videoUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												{vid.videoTitle}
											</a>
										</span>
									</div>
								</div>
							))}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			) : null}
		</Accordion>
	)
}

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
												key={prdctImg._key}
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
				<div className="py-10 product-body">
					<div className="container">
						<div className="pb-4 product-name-logo">
							<img src={SenikLogo} height="32px" alt="SÉNIK" />
							<h3 className="d-inline-block text-primary mb-0 px-3">
								{product.title}
							</h3>
						</div>
						<div className="row justify-content-between">
							<div className="col-lg-6">
								<p>{product.description}</p>
								<div
									dangerouslySetInnerHTML={{
										__html: marked(product.productDetails),
									}}
								/>
							</div>

							<div className="col-lg-6">
								<div className="basic-accordion-wrapper product-accordion">
									<ProductAccordion
										specs={product.quickSpecs}
										accessories={product.accessories}
										alldownload={product.alldownload}
										video={product.videoInfo}
										order={product.orderingInfo}
									/>
								</div>

								<div className="pt-4">
									<div className="pt-3">
										{product.quickSpecs.length !== 0 ? (
											<div>
												<h6 className="font-weight-bold">
													CCT & Color Options
												</h6>
												{product.quickSpecs[0].cct.length !== 0
													? product.quickSpecs[0].cct.map(cct => (
															<div
																className="text-center d-inline-block pr-4"
																key={cct._key}
															>
																<img
																	src={cct.color.asset.fluid.src}
																	alt={cct.cct}
																	className="img-fluid"
																	style={{ maxWidth: 33 }}
																/>
																<span className="d-block font-weight-bold">
																	{cct.cct}
																</span>
															</div>
													  ))
													: null}
											</div>
										) : null}
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
				_key
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
			quickSpecs {
				_key
				series
				voltage
				cct {
					_key
					cct
					color {
						asset {
							fluid {
								src
							}
						}
					}
				}
				cri
				wattage
				lumens
				maxRun
				cuttable
				ipRating
				dimmable
				rating
				ratedLife
			}
			orderingInfo {
				_key
				title
				body
				limited
			}
			accessories {
				_key
				itemNumber
				description
			}
			alldownload {
				_key
				title
				pdfinfo {
					_key
					title
					file {
						asset {
							url
						}
					}
				}
			}
			videoInfo {
				_key
				videoTitle
				videoUrl
			}
		}
	}
`
