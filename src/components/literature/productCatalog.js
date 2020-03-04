import React from "react"
import "swiper/css/swiper.css"
// import { Tab, Nav } from "react-bootstrap"

import { Accordion, Card, Button } from "react-bootstrap/"

class ProductCatalogs extends React.Component {
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
		return (
			<div>
				<p>
					American Lighting is a wholesale distributor of residential,
					commercial, specialty, seasonal and decorative lighting products.
					Residential and commercial lighting products are sold primarily
					through a network of electrical distributors and lighting showrooms.
					Seasonal decor is sold primarily through commercial seasonal lighting
					installers.
				</p>
				<p className="small text-muted">
					To view a digital version of a catalog or brochure, please click on
					the book you would like to browse below:
				</p>
				<div className="basic-accordion-wrapper">
					<Accordion>
						<Card>
							<Card.Header>
								<Accordion.Toggle
									as={Button}
									variant="link"
									eventKey="americanlighting"
									className="accordion-label"
								>
									American Lighting
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="americanlighting">
								<Card.Body>
									<div className="row">
										<div className="col-md-4 text-center">
											<img
												src="/img/sample-catalogs/american-lighting.png"
												className="img-fluid"
												alt=""
											/>
										</div>
										<div className="col-md-8">
											<ul>
												<li>
													<a href="#">American Lighting 2020 Catalog</a>
												</li>
												<li>
													<a href="#">American Lighting 2019 Catalog</a>
												</li>
												<li>
													<a href="#">American Lighting Product Guide 2019</a>
												</li>
												<li>
													<a href="#">Seasonal 2019 Catalog</a>
												</li>
											</ul>
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
									eventKey="epiqmag"
									className="accordion-label"
								>
									Epig Mag
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="epiqmag">
								<Card.Body>
									<div className="row">
										<div className="col-md-4 text-center">
											<img
												src="/img/sample-catalogs/epiqmag.jpg"
												className="img-fluid"
												alt=""
											/>
										</div>
										<div className="col-md-8">
											<ul>
												<li>
													<a href="#">EPIQ Mag Downlights</a>
												</li>
											</ul>
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
									eventKey="lumefx"
									className="accordion-label"
								>
									Lume|FX
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="lumefx">
								<Card.Body>
									<div className="row">
										<div className="col-md-4 text-center">
											<img
												src="/img/sample-catalogs/lumefx.jpg"
												className="img-fluid"
												alt=""
											/>
										</div>
										<div className="col-md-8">
											<ul>
												<li>
													<a href="#">Lume|FX Tunable Lighting</a>
												</li>
											</ul>
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
									eventKey="trulux"
									className="accordion-label"
								>
									Trulux Lighting Systems
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="trulux">
								<Card.Body>
									<div className="row">
										<div className="col-md-4 text-center">
											<img
												src="/img/sample-catalogs/trulux.png"
												className="img-fluid"
												alt=""
											/>
										</div>
										<div className="col-md-8">
											<ul>
												<li>
													<a href="#">Trulux Lighting Systems</a>
												</li>
												<li>
													<a href="#">Trulux Custom Cut Brochure</a>
												</li>
												<li>
													<a href="#">
														Trulux Custom Cut Single Color Order Form
													</a>
												</li>
												<li>
													<a href="#">
														Trulux Custom Cut Tunable CCT Order Form
													</a>
												</li>
												<li>
													<a href="#">
														Trulux Custom Cut RGB/RGB+WW Order Form
													</a>
												</li>
											</ul>
										</div>
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</div>
			</div>
		)
	}
}

export default ProductCatalogs
