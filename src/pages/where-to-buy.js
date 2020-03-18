import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import USA from "@svg-maps/usa"
import { RadioSVGMap } from "react-svg-map"
// import "react-svg-map/lib/index.css"

class WhereToBuyPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedLocation: "al",
		}

		this.handleOnChange = this.handleOnChange.bind(this)
	}

	handleOnChange(selectedNode) {
		this.setState(prevState => {
			document
				.getElementById(prevState.selectedLocation)
				.setAttribute("aria-checked", false)
			return {
				...prevState,
				selectedLocation: selectedNode.attributes.id.value,
			}
		})
	}

	handleSelect(abbr) {
		this.setState(prevState => {
			document
				.getElementById(prevState.selectedLocation)
				.setAttribute("aria-checked", false)
			return {
				...prevState,
				selectedLocation: abbr,
			}
		})
		document.getElementById(abbr.toString()).setAttribute("aria-checked", true)
	}

	render() {
		const allStates = this.props.data.allSanityStates.edges
		const states = []

		allStates.map(
			test =>
				test.node.abbreviation === this.state.selectedLocation &&
				states.push(test)
		)

		return (
			<Layout>
				<SEO title="Where to Buy" />
				<div className="page-headline">
					<div className="container">
						<div className="section-heading">
							<h1>Where to Buy</h1>
						</div>
					</div>
				</div>
				<div className="page-content">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-md-6">
								<div className="select-state-wrapper">
									<p className="small text-muted">
										Select a state or province listed below for showrooms and
										distributors in your area.
									</p>
									<div className="pb-3">
										<span className="mr-2">Select:</span>
										<select onChange={e => this.handleSelect(e.target.value)}>
											{allStates.map(values => (
												<option
													value={values.node.abbreviation}
													key={values.node.id}
													selected={
														values.node.abbreviation ===
														this.state.selectedLocation
															? true
															: false
													}
												>
													{values.node.title}
												</option>
											))}
										</select>
									</div>
									<RadioSVGMap map={USA} onChange={this.handleOnChange} />
								</div>
							</div>
							<div className="col-lg-5">
								{states.map(state => (
									<div key={state.node.id}>
										<h3 className="section-heading">{state.node.title}</h3>
										{state && state.node && state.node.city.length !== 0 ? (
											state &&
											state.node.city &&
											state.node.city.map(city => (
												<div key={city._key}>
													<h5 className="text-primary text-uppercase bordered-heading">
														{city.name}
													</h5>
													<div className="row">
														{(city &&
															city.stores &&
															city.stores.map(store => (
																<div className="col-6 mb-4" key={store._key}>
																	<h6 className="font-weight-bold">
																		{store.storeName}
																	</h6>
																	<p className="small text-muted">
																		{store.streetAddress || "N/A"}
																		<br />
																		{city.name},{" "}
																		<span className="text-uppercase">
																			{state.node.abbreviation}
																		</span>{" "}
																		{store.zipcode}
																		<br />
																		PH:{" "}
																		{(
																			<a
																				href={`tel:${store.phoneNumber}`}
																				target="_blank"
																				rel="noopener noreferrer"
																			>
																				{store.phoneNumber}
																			</a>
																		) || "N/A"}
																		<br />
																		Website:{" "}
																		{store.website ? (
																			<a
																				href={store.website}
																				target="_blank"
																				rel="noopener noreferrer"
																			>
																				{store.website}
																			</a>
																		) : (
																			"N/A"
																		)}
																	</p>
																</div>
															))) ||
															""}
													</div>
												</div>
											))
										) : (
											<p>No stores. Please select another state.</p>
										)}
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

export default WhereToBuyPage

export const wheretobuyQuery = graphql`
	query wheretobuyQuery {
		allSanityStates(sort: { fields: title, order: ASC }) {
			edges {
				node {
					id
					title
					abbreviation
					city {
						_key
						name
						stores {
							_key
							zipcode
							streetAddress
							storeName
							phoneNumber
							website
						}
					}
				}
			}
		}
	}
`
