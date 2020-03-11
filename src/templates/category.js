import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import { Accordion, Card, Button } from "react-bootstrap/"
//carousel
import PrizmCarousel from "../components/carousels/categoryCarousels/prizmTapeLight"

class CategoryPageTemplate extends React.Component {
	render() {
		const siteTitle = this.props.data.site.siteMetadata.title
		const siteDescription = this.props.data.site.siteMetadata.description
		const allproduct = this.props.data.allSanityProduct.edges.map(t => t.node)
		const ctgry = this.props.data.sanityCategory

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
											<span className="small text-uppercase font-weight-bold text-muted d-block">
												Category
											</span>
											<h3 className="text-transform-capitalize">
												{ctgry.title}
											</h3>
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
								<div id="single-color-tape-light">
									<div className="row no-gutters">
										{allproduct.map(prod => (
											<div className="col-6 col-md-3" key={prod.id}>
												<div className="product-item">
													<Link to={prod.slug.current}>
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
																to={prod.slug.current}
															>
																<h6 className="font-weight-bold">
																	{prod.title}
																</h6>
															</Link>
															<p className="small text-muted mb-0">
																{prod.description}
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
					subcategory {
						title
					}
				}
			}
		}
	}
`
