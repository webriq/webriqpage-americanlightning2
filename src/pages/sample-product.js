import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import { Accordion, Card, Button } from "react-bootstrap/"

//images
import TLMMaxRun from "../images/sample-products/tlm-max-run.png"
import PrizmLogo from "../images/prizm-logo.svg"
import CULUS from "../images/culus-icon.svg"

import RelatedItems from "../components/RelatedItems"

class ProductPage extends React.Component {
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

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="TLM - Max Run" description={siteDescription} />
				<div className="pt-20 pb-10">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-lg-5">
								<img src={TLMMaxRun} className="img-fluid" alt="TLM Max Run" />
							</div>
							<div className="col-lg-6">
								<div className="pb-4 product-name-logo">
									<img src={PrizmLogo} height="32px" alt="Prizm" />
									<h3 className="d-inline-block text-primary mb-0 px-3">
										TLM - Max Run
									</h3>
									<img src={CULUS} height="32px" alt="cULus listed" />
								</div>
								<p>
									For large scale projects, the Max Run series provides a more
									convenient installation by minimizing drivers and connections.
									TLM Max Run tape is a great tool for lighting coves,
									corridors, lobbies, and retail spaces featuring a max run
									length up to 65 feet and available in 2700K, 3000K, and 4000K
									popular color temperatures.
								</p>
								<ul className="styled-list">
									<li>Excellent color rendering (90+ CRI)</li>
									<li>Color temperatures available from 2400K to 4000K</li>
									<li>118-121 lumens per foot performance</li>
									<li>Consuming up to 1.46 watts per foot</li>
									<li>
										Dimmable with most electronic low voltage (ELV) dimmers
									</li>
									<li>Run lengths up to 65.6 feet and cuttable every 1.97"</li>
								</ul>
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

export default ProductPage

export const productPageQuery = graphql`
	query productPageQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}

		allSanityProduct(limit: 20, sort: { fields: title, order: ASC }) {
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
								fluid(maxHeight: 200, maxWidth: 283) {
									src
								}
							}
						}
					}
				}
			}
		}
	}
`
