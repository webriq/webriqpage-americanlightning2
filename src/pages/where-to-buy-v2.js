import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import USA from "@svg-maps/usa"
import { SVGMap, RadioSVGMap } from "react-svg-map"
import "react-svg-map/lib/index.css"

const states = {
	al: {
		state: "Alabama",
		city: [
			{
				name: "Anniston",
				stores: [
					{
						storeName: "Lighting Showroom Inc",
						streetAddress: "1700 S Quintard Ave",
						zipcode: "36201",
						phoneNum: "256-831-7680",
					},
				],
			},
			{
				name: "Decatur",
				stores: [
					{
						storeName: "Rexel",
						streetAddress: "1312 State Docks Rd",
						zipcode: "36201",
						phoneNum: "256-353-6131",
					},
				],
			},
			{
				name: "Huntsville",
				stores: [
					{
						storeName: "Inline Electric Supply",
						streetAddress: "2880 Bob Wallace Ave",
						zipcode: "35805",
						phoneNum: "256-599-2851",
					},
					{
						storeName: "Richards Lighting",
						streetAddress: "1881 University Dr Nw",
						zipcode: "35801",
						phoneNum: "256-533-1460",
					},
				],
			},
			{
				name: "Madison",
				stores: [
					{
						storeName: "Gexpro",
						streetAddress: "145 Production Avenue",
						zipcode: "35758",
						phoneNum: "256-774-1651",
					},
				],
			},
			{
				name: "Mobile",
				stores: [
					{
						storeName: "Rexel",
						streetAddress: "780 Lakeside Dr Suite A",
						zipcode: "36693",
						phoneNum: "251-479-6000",
					},
					{
						storeName: "City Electric - Mobile West",
						streetAddress: "5237 Halls Mill Rd Bldg C, Ste A",
						zipcode: "36619",
						phoneNum: "251-660-9500",
					},
				],
			},
			{
				name: "Tuscaloosa",
				stores: [
					{
						storeName: "Applico Appliance & Lighting",
						streetAddress: "6509 Highway 69 South",
						zipcode: "35405",
						phoneNum: "205-886-6124",
					},
				],
			},
		],
	},
	ak: {
		state: "Alaska",
		city: [
			{
				name: "Anchorage",
				stores: [
					{
						storeName: "Gexpro",
						streetAddress: "501 W. 58th Avenue",
						zipcode: "99518",
						phoneNum: "907-561-1980",
					},
					{
						storeName: "Brown's Electrical Supply Co.",
						streetAddress: "1415 Spar Ave",
						zipcode: "99501",
						phoneNum: "907-272-2259",
					},
					{
						storeName: "Brown's Electrical Supply Co. - Southside",
						streetAddress: "1000 E 76th Ave",
						zipcode: "99518",
						phoneNum: "901-563-3265",
					},
					{
						storeName: "Brown's Electrical Supply Co. - Lighting Gallery",
						streetAddress: "940 East Sixth",
						zipcode: "99501",
						phoneNum: "907-277-5445",
					},
				],
			},
			{
				name: "Fairbanks",
				stores: [
					{
						storeName: "Brown's Electrical Supply Co.",
						streetAddress: "1715 College Rd",
						zipcode: "99709",
						phoneNum: "907-451-9110",
					},
				],
			},
			{
				name: "Soldotna",
				stores: [
					{
						storeName: "Brown's Electrical Supply Co.",
						streetAddress: "43531 A K-Beach Rd",
						zipcode: "99669",
						phoneNum: "907-262-2121",
					},
				],
			},
			{
				name: "Wasilla",
				stores: [
					{
						storeName: "Brown's Electrical Supply Co.",
						streetAddress: "121 W Parks Hwy",
						zipcode: "99654",
						phoneNum: "907-376-6548",
					},
				],
			},
		],
	},
	az: {
		state: "Arizona",
		city: [
			{
				name: "Chandler",
				stores: [
					{
						storeName: "CES-Chandler",
						streetAddress: "4340 W Chandler Blvd",
						zipcode: "85226",
						phoneNum: "480-246-8561",
					},
				],
			},
		],
	},
}

class WhereToBuyPage extends React.Component {
	// const [selectedState, setSelectedState] = useState("AL") //default Alabama
	// const [highlighted, setHighlighted] = useState({
	// 	AL: {
	// 		fill: "#418fde",
	// 	},
	// })
	// const mapHandler = e => {
	// 	setHighlighted({
	// 		[e.target.dataset.name]: {
	// 			fill: "#418fde",
	// 		},
	// 	})
	// 	setSelectedState(e.target.dataset.name)
	// }

	constructor(props) {
		super(props)

		this.state = {
			selectedLocation: "al",
			stateData: "AL",
		}

		this.handleOnChange = this.handleOnChange.bind(this)
	}

	handleLocationBlur() {
		this.setState({ focusedLocation: null })
	}

	handleOnChange(selectedNode) {
		this.setState(prevState => {
			return {
				...prevState,
				selectedLocation: selectedNode.attributes.id.value,
				stateData:
					(states[selectedNode.attributes.id.value.toString()] &&
						states[selectedNode.attributes.id.value.toString()]) ||
					[],
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
				stateData: (states[abbr.toString()] && states[abbr.toString()]) || [],
			}
		})
		document.getElementById(abbr.toString()).setAttribute("aria-checked", true)
	}

	render() {
		return (
			<Layout>
				<SEO title="Where to Buy" />
				<div class="page-headline">
					<div class="container">
						<div class="section-heading">
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
									<span className="mr-2">Select:</span>
									<select onChange={e => this.handleSelect(e.target.value)}>
										{Object.entries(states).map(([key, values]) => (
											<option
												value={key}
												selected={
													key === this.state.selectedLocation ? true : false
												}
											>
												{values.state}
											</option>
										))}
									</select>
									<br />
									<RadioSVGMap map={USA} onChange={this.handleOnChange} />
								</div>
							</div>
							<div className="col-lg-5">
								{(this.state.stateData &&
									this.state.stateData.city &&
									this.state.stateData.city.map(city => (
										<div>
											<h5 className="text-primary text-uppercase bordered-heading">
												{city.name}
											</h5>
											<div className="row">
												{(city &&
													city.stores &&
													city.stores.map(store => (
														<div className="col-6 mb-4">
															<h6 className="font-weight-bold">
																{store.storeName}
															</h6>
															<p className="small text-muted">
																{store.streetAddress}
																<br />
																{city.name},{" "}
																<span className="text-uppercase">
																	{this.state.selectedLocation}
																</span>{" "}
																{store.zipcode}
																<br />
																PH: {store.phoneNum}
															</p>
														</div>
													))) ||
													""}
											</div>
										</div>
									))) ||
									"No stores. Please select another state."}
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default WhereToBuyPage
