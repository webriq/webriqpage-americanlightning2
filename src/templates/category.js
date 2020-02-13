import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
	Link as Anchor,
	Events,
	animateScroll as scroll,
	scroller,
} from "react-scroll"
import { LazyLoadComponent } from "react-lazy-load-image-component"

//carousel
import PrizmCarousel from "../components/carousels/categoryCarousels/prizmTapeLight"

class CategoryPageTemplate extends React.Component {
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
		// console.log(this.props.data)
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
											<h3>{ctgry.title}</h3>
										</div>
										<div id="menu-top" className="pt-4" />
										<ul className="list-unstyled sticky-sidebar-categories">
											{/*	const products = this.props.data.allSanityProduct.edges.filter(
										test => test.node.subcategory[0].title === subct.title
									)*/}
											{ctgry.subcategory.map(subcat => {
												const count = this.props.data.allSanityProduct.edges.filter(
													test =>
														test.node.subcategory[0].title === subcat.title
												)
												console.log(count)
												return (
													<li key={subcat.title}>
														<Anchor
															to={subcat.title}
															duration={500}
															spy={true}
															smooth={true}
														>
															{subcat.title}
														</Anchor>
														<span className="item-count">{count.length}</span>
													</li>
												)
											})}
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-9">
								{ctgry.subcategory.map(subct => {
									const products = this.props.data.allSanityProduct.edges.filter(
										test => test.node.subcategory[0].title === subct.title
									)

									return (
										<div
											key={subct.title}
											id={subct.title}
											className="scroll-spacer"
										>
											<h5 className="subcategory-heading">{subct.title}</h5>
											<div className="row no-gutters">
												{products.length !== 0 ? (
													products.map(prod => (
														<div className="col-md-4" key={prod.node.id}>
															<div className="product-item">
																<Link to="/sample-product">
																	<div className="product-image">
																		<div className="v-center">
																			<img
																				className="img-fluid"
																				src={
																					prod.node &&
																					prod.node.productImage[0] &&
																					prod.node.productImage[0].image &&
																					prod.node.productImage[0].image
																						.asset &&
																					prod.node.productImage[0].image.asset
																						.fixed &&
																					prod.node.productImage[0].image.asset
																						.fixed.src
																				}
																				alt=""
																			/>
																		</div>
																	</div>
																</Link>
																<div className="product-desc">
																	<div>
																		<Link
																			className="text-body"
																			to="/sample-product"
																		>
																			<h6 className="font-weight-bold">
																				{prod.node.title}
																			</h6>
																		</Link>
																		<p className="small text-muted mb-0">
																			{prod.node.description}
																		</p>
																	</div>
																</div>
															</div>
														</div>
													))
												) : (
													<h2>No Items yet!!!</h2>
												)}
											</div>
										</div>
									)
								})}
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
