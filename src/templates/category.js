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

//images
import TLSStandard from "../images/sample-products/tls-standard-grade.png"
import TLMMaxRun from "../images/sample-products/tlm-max-run.png"
// import TLHHighOutput from "../images/sample-products/tlh-high-output.png"
// import TLXPremiumGrade from "../images/sample-products/tlx-premium-grade.png"
// import TLSTuning from "../images/sample-products/tls-tunable.png"
// import TLXTuning from "../images/sample-products/tlx-tunable.png"
// import TLDTuning from "../images/sample-products/tld-tunable.png"
// import PixelRGBSeries from "../images/sample-products/pixel-rgb-series.png"
// import RGBSeries from "../images/sample-products/rgb-series.png"
// import RGBWSeries from "../images/sample-products/rgbw-series.png"
// import RGBTWSeries from "../images/sample-products/rgbtw-series.png"

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
		console.log(this.props.data)
		const ctgry = this.props.data.sanityCategory
		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title={ctgry.title} description={siteDescription} />
				<LazyLoadComponent>
					<PrizmCarousel />
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
											{ctgry.subcategory.map(subcat => (
												<li key={subcat.title}>
													<Anchor
														to={subcat.title}
														duration={500}
														spy={true}
														smooth={true}
													>
														{subcat.title}
													</Anchor>
													<span className="item-count">4</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-9">
								{ctgry.subcategory.map(subct => (
									<div id={subct.title} className="scroll-spacer">
										<h5 className="subcategory-heading">{subct.title}</h5>
										<div className="row no-gutters">
											<div className="col-md-4">
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
											<div className="col-md-4">
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
										</div>
									</div>
								))}
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
		}
		allSanityProduct(
			filter: { subcategory: { elemMatch: { title: { eq: "PUCK LIGHTS" } } } }
		) {
			edges {
				node {
					title
					subcategory {
						title
					}
				}
			}
		}
	}
`
