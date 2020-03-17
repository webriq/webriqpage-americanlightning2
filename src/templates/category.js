import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import { Accordion, Card, Button } from "react-bootstrap/"
import _ from "lodash"
//carousel
import PrizmCarousel from "../components/carousels/categoryCarousels/prizmTapeLight"

class CategoryPageTemplate extends React.Component {
	constructor() {
		super()

		this.state = {
			orderTitle: "",
			allDownload: "",
			accessoriesItem: "",
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}
	handleChange(e) {
		// console.log(e.target.type)
		const { name, value, type, checked } = e.target
		// console.log(name, value)

		this.setState({
			[name]: type === "checkbox" ? checked : value,
		})
	}

	handleReset(e) {
		e.preventDefault()
		this.setState({
			orderTitle: "",
			allDownload: "",
			accessoriesItem: "",
		})
	}

	render() {
		const { orderTitle, allDownload, accessoriesItem } = this.state
		const siteTitle = this.props.data.site.siteMetadata.title
		const siteDescription = this.props.data.site.siteMetadata.description
		const allproduct = this.props.data.allSanityProduct.edges.map(t => t.node)
		const filterProduct = []

		if (
			orderTitle.length !== 0 &&
			allDownload.length !== 0 &&
			accessoriesItem.length !== 0
		) {
			allproduct.map(
				prod =>
					prod.orderingInfo.length !== 0 &&
					prod.orderingInfo.filter(order => order.title === orderTitle) &&
					prod.alldownload.length !== 0 &&
					prod.alldownload.filter(order => order.title === allDownload) &&
					prod.accessories.length !== 0 &&
					prod.accessories.filter(
						accessory =>
							accessory.itemNumber === accessoriesItem &&
							filterProduct.push(prod)
					)
			)
		}

		if (
			orderTitle.length === 0 &&
			allDownload.length !== 0 &&
			accessoriesItem.length !== 0
		) {
			allproduct.map(
				prod =>
					prod.alldownload.length !== 0 &&
					prod.alldownload.filter(order => order.title === allDownload) &&
					prod.accessories.length !== 0 &&
					prod.accessories.filter(
						accessory =>
							accessory.itemNumber === accessoriesItem &&
							filterProduct.push(prod)
					)
			)
		}

		if (
			orderTitle.length !== 0 &&
			allDownload.length === 0 &&
			accessoriesItem.length !== 0
		) {
			allproduct.map(
				prod =>
					prod.orderingInfo.length !== 0 &&
					prod.orderingInfo.filter(order => order.title === orderTitle) &&
					prod.accessories.length !== 0 &&
					prod.accessories.filter(
						accessory =>
							accessory.itemNumber === accessoriesItem &&
							filterProduct.push(prod)
					)
			)
		}

		if (
			orderTitle.length !== 0 &&
			allDownload.length !== 0 &&
			accessoriesItem.length === 0
		) {
			allproduct.map(
				prod =>
					prod.alldownload.length !== 0 &&
					prod.alldownload.filter(order => order.title === allDownload) &&
					prod.orderingInfo.length !== 0 &&
					prod.orderingInfo.filter(
						order => order.title === orderTitle && filterProduct.push(prod)
					)
			)
		}

		if (
			orderTitle.length !== 0 &&
			allDownload.length === 0 &&
			accessoriesItem.length === 0
		) {
			allproduct.map(
				prod =>
					prod.orderingInfo.length !== 0 &&
					prod.orderingInfo.filter(
						order => order.title === orderTitle && filterProduct.push(prod)
					)
			)
		}

		if (
			orderTitle.length === 0 &&
			allDownload.length !== 0 &&
			accessoriesItem.length === 0
		) {
			allproduct.map(
				prod =>
					prod.alldownload.length !== 0 &&
					prod.alldownload.filter(
						order => order.title === allDownload && filterProduct.push(prod)
					)
			)
		}
		// accessories itemNumber
		if (
			orderTitle.length === 0 &&
			allDownload.length === 0 &&
			accessoriesItem.length !== 0
		) {
			allproduct.map(
				prod =>
					prod.accessories.length !== 0 &&
					prod.accessories.filter(
						accessory =>
							accessory.itemNumber === accessoriesItem &&
							filterProduct.push(prod)
					)
			)
		}

		const products = filterProduct.length !== 0 ? filterProduct : allproduct

		console.log("products", products)

		console.log("filterProduct", filterProduct)
		const ctgry = this.props.data.sanityCategory

		// Order Info
		const orderingInfoTitle = []
		const orderingInfoData = []
		// Get all Order Info Data
		const orderingInfo = products.filter(
			data => data.orderingInfo.length > 0 && data
		)
		// Initialize Quick Specs Series Name
		orderingInfo.map(data =>
			data.orderingInfo.map(list => orderingInfoTitle.push(list.title))
		)
		const noDupsOrderTitle = _.uniqBy(orderingInfoTitle)

		products.map(
			product =>
				product.orderingInfo.length > 0 &&
				product.orderingInfo.filter(data =>
					orderingInfoTitle.includes(data.title)
						? orderingInfoData.push(product)
						: null
				)
		)

		// All Dowloads

		const allDownloadTitle = []
		const allDownloadData = []

		products.map(data =>
			data.alldownload.map(download => allDownloadTitle.push(download.title))
		)

		products.map(
			product =>
				product.alldownload.length > 0 &&
				product.alldownload.filter(data =>
					allDownloadTitle.includes(data.title)
						? allDownloadData.push(product)
						: null
				)
		)

		const noDupsAllDownloadTitle = _.uniqBy(allDownloadTitle)
		const noDupsProducts = _.uniqBy(products)

		// All Accessories
		// accessories itemNumber
		const allAccessories = []
		const allAccessoriesData = []

		products.map(data =>
			data.accessories.map(accessory =>
				allAccessories.push(accessory.itemNumber)
			)
		)

		products.map(
			product =>
				product.accessories.length > 0 &&
				product.accessories.filter(data =>
					allAccessories.includes(data.itemNumber)
						? allAccessoriesData.push(product)
						: null
				)
		)

		const noDupsallAccessories = _.uniqBy(allAccessories)
		console.log("allAccessories", allAccessories)
		console.log("allAccessoriesData", allAccessoriesData)
		// console.log("noDupsAllDownloadTitle", noDupsAllDownloadTitle)
		// console.log("allDownloadTitle", allDownloadTitle)
		// console.log("allDownloadData", allDownloadData)

		// console.log("All Products", allproduct)
		// console.log("orderingInfo", orderingInfo)
		// console.log("orderingInfoTitle", orderingInfoTitle)
		// console.log("remove dups", noDupsOrderTitle)
		// // Filter All Quick Specs Data by Quick Specs Series Name

		// console.log("orderingInfoData", orderingInfoData)
		// console.log("state orderTitle", this.state)
		// console.log(_.groupBy(orderingInfoTitle))
		// console.log("products", products)
		console.log("states", this.state)
		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title={ctgry.title} description={siteDescription} />
				<LazyLoadComponent>
					<PrizmCarousel slider={ctgry.slider} />
				</LazyLoadComponent>
				<div className="py-10">
					<div className="container">
						<div className="row justify-content-between">
							{/* sticky sidebar */}
							<div className="col-md-3">
								<div className="category-sidebar">
									<div className="sticky-top">
										<div>
											<span className="text-uppercase font-weight-bold">
												{ctgry.title}
											</span>{" "}
											|{" "}
											<button
												style={{
													background: "transparent",
													outline: "none",
													padding: "0",
													border: "none",
												}}
												onClick={this.handleReset}
											>
												<span className="text-primary">Reset</span>
											</button>
										</div>
										<div id="menu-top" className="pt-4" />
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
															Order Info
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="1">
														<Card.Body>
															<select
																className="d-block"
																name="orderTitle"
																onChange={this.handleChange}
															>
																<option value="">Select Order Info</option>
																{orderingInfoTitle.length !== 0
																	? noDupsOrderTitle.map(title => (
																			<option key={title} value={title}>
																				{title}
																			</option>
																	  ))
																	: null}
															</select>
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
															All Download
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="2">
														<Card.Body>
															<select
																className="d-block"
																name="allDownload"
																onChange={this.handleChange}
															>
																<option value="">Select All Download</option>
																{noDupsAllDownloadTitle.length !== 0
																	? noDupsAllDownloadTitle.map(dwnld => (
																			<option key={dwnld} value={dwnld}>
																				{dwnld}
																			</option>
																	  ))
																	: null}
															</select>
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
															All Accessories
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="3">
														<Card.Body>
															<select
																className="d-block"
																name="accessoriesItem"
																onChange={this.handleChange}
															>
																<option value="">Select All Accessories</option>
																{noDupsallAccessories.length !== 0
																	? noDupsallAccessories.map(dwnld => (
																			<option key={dwnld} value={dwnld}>
																				{dwnld}
																			</option>
																	  ))
																	: null}
															</select>
														</Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-9">
								<div id="single-color-tape-light">
									<div className="row no-gutters">
										{noDupsProducts.map(prod => (
											<div className="col-6 col-md-3" key={prod.id}>
												<div className="product-item">
													<Link to={`/${prod.slug.current}`}>
														<div className="product-image">
															<div className="v-center">
																<img
																	className="img-fluid"
																	src={
																		prod &&
																		prod.productImage[0] &&
																		prod.productImage[0].image &&
																		prod.productImage[0].image.asset &&
																		prod.productImage[0].image.asset.fixed &&
																		prod.productImage[0].image.asset.fixed.src
																	}
																	alt={prod.title}
																/>
															</div>
														</div>
													</Link>
													<div className="product-desc">
														<div>
															<Link
																className="text-body"
																to={`/${prod.slug.current}`}
															>
																<h6 className="font-weight-bold">
																	{prod.title}
																</h6>
															</Link>
															<p className="small text-muted mb-0">
																{prod.description.length > 120
																	? prod.description.substring(0, 120) + "..."
																	: prod.description.substring(0, 120)}
															</p>
														</div>
													</div>
												</div>
											</div>
										))}
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

export default CategoryPageTemplate

export const CategoryPageTemplateQuery = graphql`
	query CategoryPageTemplateQuery($title: String!) {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
		sanityCategory(title: { eq: $title }) {
			id
			title
			subcategory {
				title
			}
			slider {
				title
				description
				pagelink {
					current
				}
				pagelinkname
				banner {
					asset {
						fluid {
							src
						}
					}
				}
			}
		}
		allSanityProduct(
			filter: { category: { elemMatch: { title: { eq: $title } } } }
		) {
			edges {
				node {
					id
					title
					description
					slug {
						current
					}
					productImage {
						image {
							asset {
								fixed(width: 290, height: 244) {
									src
								}
							}
						}
					}
					alldownload {
						title
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
					subcategory {
						title
					}
				}
			}
		}
	}
`
