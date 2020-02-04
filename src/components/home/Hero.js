import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import Carousel from "./heroCarousel"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"

class Hero extends React.Component {
	render() {
		function makeSlide(name, desc, pic, link, button) {
			return (
				<Fade wait={7000}>
					<div>
						<div className="atf-banner">
							<Container>
								<Row className="justify-content-center">
									<Col xs="8">
										<div className="text-center">
											<Zoom right cascade delay={500} opposite>
												<h3 className="display-4 text-white font-weight-bold m-0">
													{name}
												</h3>
											</Zoom>
											<Fade bottom delay={1500} opposite>
												<p className="text-white py-4">{desc}</p>
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
				name: "Product 1",
				desc:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				pic:
					"https://res.cloudinary.com/dzr4guriw/image/upload/v1580354037/Homepage%20Carousel/app3_osa88p.jpg",
				link: "/",
				button: "Learn More",
			},
			{
				name: "Product 2",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				pic:
					"https://res.cloudinary.com/dzr4guriw/image/upload/v1580362439/Homepage%20Carousel/app12_k2g2ao.jpg",
				link: "/",
				button: "Learn More",
			},
		]

		slides = conf.map(slide =>
			makeSlide(slide.name, slide.desc, slide.pic, slide.link, slide.button)
		)

		return (
			<div className="atf-section">
				<LazyLoadComponent>
					<Carousel defaultWait={5000} maxTurns={1}>
						<Fade wait={7000}>
							<div>
								<div className="atf-banner brand">
									<Container>
										<Row className="justify-content-center">
											<Col xs="9">
												<div className="text-center">
													<Zoom cascade delay={500}>
														<h1 className="display-1 text-uppercase font-weight-normal text-white m-0">
															American Lighting
														</h1>
													</Zoom>
													<Fade bottom delay={1500}>
														<h2 className="slogan text-white lead py-4 text-uppercase">
															Bright Ideas • Innovative Solutions
														</h2>
													</Fade>
													<Fade delay={2000}>
														<Link to="/" className="btn btn-primary btn-lg">
															Discover
														</Link>
													</Fade>
												</div>
											</Col>
										</Row>
									</Container>
									<div
										className="atf-banner-bg"
										style={{
											backgroundImage: `url(https://res.cloudinary.com/dzr4guriw/image/upload/v1580352405/Homepage%20Carousel/banner_1_tn6kdi.jpg)`,
										}}
									/>
								</div>
							</div>
						</Fade>
						{slides}
					</Carousel>
				</LazyLoadComponent>
			</div>
		)
	}
}

export default Hero
