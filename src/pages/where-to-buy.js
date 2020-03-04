import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import USAMap from "react-usa-map"
// import USAMap from "../components/USAMap"

const states = {
	AL: {
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
		],
	},
	AK: {
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
				],
			},
		],
	},
}

const WhereToBuyPage = () => {
	const [selectedState, setSelectedState] = useState("AK")
	const [highlighted, setHighlighted] = useState({
		AK: {
			fill: "#418fde",
		},
	})
	const mapHandler = e => {
		setHighlighted({
			[e.target.dataset.name]: {
				fill: "#418fde",
			},
		})
		setSelectedState(e.target.dataset.name)
	}

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
						<div className="col-md-7">
							<div className="select-state-wrapper">
								<p>
									Select a state or province listed below for showrooms and
									distributors in your area.
								</p>
								<span className="mr-2">Select:</span>
								<select onChange={e => setSelectedState(e.target.value)}>
									<optgroup label="United States">
										<option
											value="AL"
											selected={selectedState === "AL" ? true : false}
										>
											Alabama
										</option>
										<option
											value="AK"
											selected={selectedState === "AK" ? true : false}
										>
											Alaska
										</option>
									</optgroup>
								</select>
								<br />
								<USAMap customize={highlighted} onClick={mapHandler} />
							</div>
						</div>
						<div className="col-lg-5">
							<div>
								<h3 className="section-heading">
									{states[selectedState].state}
								</h3>

								{states[selectedState].city.map(city => (
									<div>
										<h5 className="text-primary text-uppercase bordered-heading">
											{city.name}
										</h5>
										<div className="row">
											{city.stores.map(store => (
												<div className="col-6 mb-4">
													<h6 className="font-weight-bold">
														{store.storeName}
													</h6>
													<p className="small text-muted">
														{store.streetAddress}
														<br />
														{city.name}, {selectedState} {store.zipcode}
														<br />
														PH: {store.phoneNum}
													</p>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default WhereToBuyPage
