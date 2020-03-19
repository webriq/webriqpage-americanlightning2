import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import { Accordion, Card, Button } from "react-bootstrap"
//carousel
import PrizmCarousel from "../components/carousels/categoryCarousels/prizmTapeLight"

import CheckBox from "../components/checkbox"

const CategoryPageTemplate = ({ data, location }) => {
	const { title, description } = data.site.siteMetadata
	const ctgry = data.sanityCategory

	const allproducts = data.allSanityProduct.edges.map(t => t.node)

	const initialQuickSpecsData = []
	allproducts.map(product => initialQuickSpecsData.push(product))

	const [quickSpecsData, setQuickSpecsData] = useState(initialQuickSpecsData)

	const handleSeries = name => {
		const seriesData = []

		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.series === name ? seriesData.push(product) : null
				)
		)
		setQuickSpecsData(seriesData)
	}

	const handleVoltage = name => {
		const voltageData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.voltage === name ? voltageData.push(product) : null
				)
		)
		setQuickSpecsData(voltageData)
	}

	const handleCRI = name => {
		const criData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.cri === name ? criData.push(product) : null
				)
		)
		setQuickSpecsData(criData)
	}

	const handleWattage = name => {
		const wattageData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.wattage === name ? wattageData.push(product) : null
				)
		)
		setQuickSpecsData(wattageData)
	}

	const handleLumens = name => {
		const lumensData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.lumens === name ? lumensData.push(product) : null
				)
		)
		setQuickSpecsData(lumensData)
	}

	const handleMaxRun = name => {
		const maxRunData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.maxRun === name ? maxRunData.push(product) : null
				)
		)
		setQuickSpecsData(maxRunData)
	}

	const handleCutting = name => {
		const cuttingData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.cuttable === name ? cuttingData.push(product) : null
				)
		)
		setQuickSpecsData(cuttingData)
	}

	const handleIPRating = name => {
		const ipRatingData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.ipRating === name ? ipRatingData.push(product) : null
				)
		)
		setQuickSpecsData(ipRatingData)
	}

	const handleDimmable = name => {
		const dimmableData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.dimmable === name ? dimmableData.push(product) : null
				)
		)
		setQuickSpecsData(dimmableData)
	}

	const handleRating = name => {
		const ratingData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.rating === name ? ratingData.push(product) : null
				)
		)
		setQuickSpecsData(ratingData)
	}

	const handleRatedLife = name => {
		const ratedLifeData = []
		allproducts.map(
			product =>
				product.quickSpecs.length > 0 &&
				product.quickSpecs.filter(data =>
					data.ratedLife === name ? ratedLifeData.push(product) : null
				)
		)
		setQuickSpecsData(ratedLifeData)
	}

	console.log("Quick Specs Data", quickSpecsData)

	const getQuickSpecsNames = data => {
		switch (data) {
			case "series":
				const seriesData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => seriesData.push(list.series))
					)
				return [...new Set(seriesData)].filter(data => {
					return data
				})

			case "voltage":
				const voltageData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => voltageData.push(list.voltage))
					)
				return [...new Set(voltageData)].filter(data => {
					return data
				})

			case "cri":
				const criData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data => data.quickSpecs.map(list => criData.push(list.cri)))
				return [...new Set(criData)].filter(data => {
					return data
				})

			case "wattage":
				const wattageData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => wattageData.push(list.wattage))
					)
				return [...new Set(wattageData)].filter(data => {
					return data
				})

			case "lumens":
				const lumensData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => lumensData.push(list.lumens))
					)
				return [...new Set(lumensData)].filter(data => {
					return data
				})

			case "maxRun":
				const maxRunData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => maxRunData.push(list.maxRun))
					)
				return [...new Set(maxRunData)].filter(data => {
					return data
				})

			case "cuttable":
				const cuttableData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => cuttableData.push(list.cuttable))
					)
				return [...new Set(cuttableData)].filter(data => {
					return data
				})

			case "ipRating":
				const ipRatingData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => ipRatingData.push(list.ipRating))
					)
				return [...new Set(ipRatingData)].filter(data => {
					return data
				})

			case "dimmable":
				const dimmableData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => dimmableData.push(list.dimmable))
					)
				return [...new Set(dimmableData)].filter(data => {
					return data
				})

			case "rating":
				const ratingData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => ratingData.push(list.rating))
					)
				return [...new Set(ratingData)].filter(data => {
					return data
				})

			case "ratedLife":
				const ratedLifeData = []
				allproducts
					.filter(data => data.quickSpecs.length > 0 && data)
					.map(data =>
						data.quickSpecs.map(list => ratedLifeData.push(list.ratedLife))
					)
				return [...new Set(ratedLifeData)].filter(data => {
					return data
				})

			default:
				break
		}
	}

	// Get all Voltage Values
	const series = getQuickSpecsNames("series")
	const voltage = getQuickSpecsNames("voltage")
	const cri = getQuickSpecsNames("cri")
	const wattage = getQuickSpecsNames("wattage")
	const lumens = getQuickSpecsNames("lumens")
	const maxRun = getQuickSpecsNames("maxRun")
	const cuttable = getQuickSpecsNames("cuttable")
	const ipRating = getQuickSpecsNames("ipRating")
	const dimmable = getQuickSpecsNames("dimmable")
	const rating = getQuickSpecsNames("rating")
	const ratedLife = getQuickSpecsNames("ratedLife")

	const handleAllData = () => {
		console.log("Ariel")
		const allData = []
		allproducts.map(product => allData.push(product))

		setQuickSpecsData(allData)
	}

	return (
		<Layout location={location} title={title}>
			<SEO title={ctgry.title} description={description} />
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
										<h3 className="text-transform-capitalize">{ctgry.title}</h3>
										<button
											className="subcategory"
											onClick={() => handleAllData()}
											style={{
												cursor: "pointer",
												fontSize: "12px",
												background: "transparent",
												border: "none",
											}}
										>
											Clear Filter
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
														Series
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														{series &&
															series.map(value => (
																<CheckBox
																	value={value}
																	key={value}
																	handleData={handleSeries}
																/>
															))}
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
														Input Voltage
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														{voltage &&
															voltage.map(voltage => (
																<CheckBox
																	value={voltage}
																	key={voltage}
																	handleData={handleVoltage}
																/>
															))}
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
														CRI
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="3">
													<Card.Body>
														{cri &&
															cri.map(cri => (
																<CheckBox
																	value={cri}
																	key={voltage}
																	handleData={handleCRI}
																/>
															))}
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
														{wattage &&
															wattage.map(wattage => (
																<CheckBox
																	value={wattage}
																	key={wattage}
																	handleData={handleWattage}
																/>
															))}
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
														Lumens
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="5">
													<Card.Body>
														{lumens &&
															lumens.map(lumen => (
																<CheckBox
																	value={lumen}
																	key={lumen}
																	handleData={handleLumens}
																/>
															))}
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
														Max Run
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="6">
													<Card.Body>
														{maxRun &&
															maxRun.map(maxRun => (
																<CheckBox
																	value={maxRun}
																	key={maxRun}
																	handleData={handleMaxRun}
																/>
															))}
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
														Cutting Increments
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="7">
													<Card.Body>
														{cuttable &&
															cuttable.map(cutting => (
																<CheckBox
																	value={cuttable}
																	key={cuttable}
																	handleData={handleCutting}
																/>
															))}
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
														IP Rating
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="8">
													<Card.Body>
														{ipRating &&
															ipRating.map((ipRating, i) => (
																<CheckBox
																	value={ipRating}
																	key={ipRating + i}
																	handleData={handleIPRating}
																/>
															))}
													</Card.Body>
												</Accordion.Collapse>
											</Card>

											<Card>
												<Card.Header>
													<Accordion.Toggle
														as={Button}
														variant="link"
														eventKey="9"
														className="accordion-label"
													>
														Dimmable
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="9">
													<Card.Body>
														{dimmable &&
															dimmable.map(dimmable => (
																<CheckBox
																	value={dimmable}
																	key={dimmable}
																	handleData={handleDimmable}
																/>
															))}
													</Card.Body>
												</Accordion.Collapse>
											</Card>

											<Card>
												<Card.Header>
													<Accordion.Toggle
														as={Button}
														variant="link"
														eventKey="10"
														className="accordion-label"
													>
														Rating
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="10">
													<Card.Body>
														{rating &&
															rating.map(rating => (
																<CheckBox
																	value={rating}
																	key={rating}
																	handleData={handleRating}
																/>
															))}
													</Card.Body>
												</Accordion.Collapse>
											</Card>

											<Card>
												<Card.Header>
													<Accordion.Toggle
														as={Button}
														variant="link"
														eventKey="11"
														className="accordion-label"
													>
														Rated Life
													</Accordion.Toggle>
												</Card.Header>
												<Accordion.Collapse eventKey="11">
													<Card.Body>
														{ratedLife &&
															ratedLife.map(ratedLife => (
																<CheckBox
																	value={ratedLife}
																	key={ratedLife}
																	handleData={handleRatedLife}
																/>
															))}
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
									{quickSpecsData &&
										quickSpecsData.map(prod => (
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
					quickSpecs {
						series
						voltage
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
					subcategory {
						title
					}
				}
			}
		}
	}
`
