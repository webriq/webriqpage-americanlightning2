import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import Carousel from "./categoryCarousel"
import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"

class PrizmTapeLight extends React.Component {
	render() {
		function makeSlide(tagline, name, pic, link, button) {
			return (
				<Fade wait={7000}>
					<div>
						<div className="atf-banner category-atf">
							<Container>
								<Row>
									<Col xs={{ span: 8, offset: 2 }} md={{ span: 7, offset: 1 }}>
										<div className="text-left">
											<Fade right delay={500} opposite>
												<h3 className="display-4 m-0">{tagline}</h3>
											</Fade>
											<Fade bottom delay={1500} opposite>
												<p className="py-4 lead">{name}</p>
											</Fade>
											<Flip bottom delay={2000} opposite>
												<Link to="/" className="btn btn-primary">
													{button}
												</Link>
											</Flip>
										</div>
									</Col>
								</Row>
							</Container>
							<div
								className="atf-banner-bg"
								style={{ backgroundImage: `url(${pic})` }}
							/>
						</div>
					</div>
				</Fade>
			)
		}

		let conf, slides

		conf = [
			{
				tagline: "Economical and versatile lighting system",
				name: "TLS Series Tape Light",
				pic: "img/category-carousels/prizm/tls-series-tape-light.jpg",
				link: "/",
				button: "View Product",
			},
			{
				tagline:
					"Need custom color temperature lighting at the turn of a dial?",
				name: "TLS Tunable CCT Series",
				pic: "img/category-carousels/prizm/tls-tunable-cct.jpg",
				link: "/",
				button: "View Product",
			},
		]

		slides = conf.map(slide =>
			makeSlide(slide.tagline, slide.name, slide.pic, slide.link, slide.button)
		)

		return (
			<div className="category-carousel">
				<LazyLoadComponent>
					<Carousel defaultWait={5000} maxTurns={1}>
						{slides}
					</Carousel>
				</LazyLoadComponent>
			</div>
		)
	}
}

export default PrizmTapeLight
