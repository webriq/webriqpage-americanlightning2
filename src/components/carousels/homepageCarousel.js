import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import marked from "marked"
import Carousel from "./Carousel"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"

class Hero extends React.Component {
	render() {
		console.log(this.props.sliders)
		console.log("test")
		function makeSlide(name, desc, pic, link, button) {
			return (
				<Fade wait={7000} key={name}>
					<div>
						<div className="hero-banner">
							<Container>
								<Row className="justify-content-center">
									<Col xs="8">
										<div className="text-center">
											<Zoom right cascade delay={500} opposite>
												<h3 className="display-4 text-white m-0">{name}</h3>
											</Zoom>
											<Fade bottom delay={1500} opposite>
												<p className="text-white py-4">{desc}</p>
											</Fade>
											<Flip bottom delay={2000} opposite>
												<Link to={link} className="btn btn-primary">
													{button}
												</Link>
											</Flip>
										</div>
									</Col>
								</Row>
							</Container>
							<div
								className="hero-banner-bg"
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
				pic: "/img/hero/hero-1.jpg",
				link: "/sample-product",
				button: "Learn More",
			},
			{
				name: "Product 2",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				pic: "/img/hero/hero-2.jpg",
				link: "/sample-product-with-splash",
				button: "Learn More",
			},
		]

		slides = conf.map(slide =>
			makeSlide(slide.name, slide.desc, slide.pic, slide.link, slide.button)
		)

		return (
			<div className="hero-section">
				<LazyLoadComponent>
					<Carousel defaultWait={5000} maxTurns={1}>
						{this.props.sliders.map(slide =>
							slide.animation === "fade" ? (
								<Fade wait={7000} key={slide.node.id}>
									<div>
										<div className="hero-banner">
											<Container>
												<Row className="justify-content-center">
													<Col xs="8">
														<div className="text-center">
															<Zoom right cascade delay={500} opposite>
																<h3 className="display-4 text-white m-0">
																	{slide.node.title || null}
																</h3>
															</Zoom>
															<Fade bottom delay={1500} opposite>
																{slide &&
																slide.node &&
																slide.node.description ? (
																	<div
																		className="text-white"
																		dangerouslySetInnerHTML={{
																			__html: marked(slide.node.description),
																		}}
																	/>
																) : null}
															</Fade>
															<Flip bottom delay={2000} opposite>
																<Link
																	to={slide.node.pagelink.current || "/"}
																	className="btn btn-primary"
																>
																	{slide.node.paglinkname || "Home"}
																</Link>
															</Flip>
														</div>
													</Col>
												</Row>
											</Container>
											<div
												className="hero-banner-bg"
												style={{
													backgroundImage: `url(${
														slide.node.banner.length !== 0
															? slide.node.banner.asset.fluid.src
															: "/img/hero/hero-2.jpg"
													})`,
												}}
											/>
										</div>
									</div>
								</Fade>
							) : slide.node.animation === "flip" ? (
								<Flip wait={7000} key={slide.node.id}>
									<div>
										<div className="hero-banner">
											<Container>
												<Row className="justify-content-center">
													<Col xs="8">
														<div className="text-center">
															<Zoom right cascade delay={500} opposite>
																<h3 className="display-4 text-white m-0">
																	{slide.node.title || null}
																</h3>
															</Zoom>
															<Fade bottom delay={1500} opposite>
																{slide &&
																slide.node &&
																slide.node.description ? (
																	<div
																		className="text-white"
																		dangerouslySetInnerHTML={{
																			__html: marked(slide.node.description),
																		}}
																	/>
																) : null}
															</Fade>
															<Flip bottom delay={2000} opposite>
																<Link
																	to={slide.node.pagelink.current || "/"}
																	className="btn btn-primary"
																>
																	{slide.node.paglinkname || "Home"}
																</Link>
															</Flip>
														</div>
													</Col>
												</Row>
											</Container>
											<div
												className="hero-banner-bg"
												style={{
													backgroundImage: `url(${
														slide.node.banner.length !== 0
															? slide.node.banner.asset.fluid.src
															: "/img/hero/hero-2.jpg"
													})`,
												}}
											/>
										</div>
									</div>
								</Flip>
							) : slide.node.animation === "zoom" ? (
								<Zoom wait={7000} key={slide.node.id}>
									<div>
										<div className="hero-banner">
											<Container>
												<Row className="justify-content-center">
													<Col xs="8">
														<div className="text-center">
															<Zoom right cascade delay={500} opposite>
																<h3 className="display-4 text-white m-0">
																	{slide.node.title || null}
																</h3>
															</Zoom>
															<Fade bottom delay={1500} opposite>
																{slide &&
																slide.node &&
																slide.node.description ? (
																	<div
																		className="text-white"
																		dangerouslySetInnerHTML={{
																			__html: marked(slide.node.description),
																		}}
																	/>
																) : null}
															</Fade>
															<Flip bottom delay={2000} opposite>
																<Link
																	to={slide.node.pagelink.current || "/"}
																	className="btn btn-primary"
																>
																	{slide.node.paglinkname || "Home"}
																</Link>
															</Flip>
														</div>
													</Col>
												</Row>
											</Container>
											<div
												className="hero-banner-bg"
												style={{
													backgroundImage: `url(${
														slide.node.banner.length !== 0
															? slide.node.banner.asset.fluid.src
															: "/img/hero/hero-2.jpg"
													})`,
												}}
											/>
										</div>
									</div>
								</Zoom>
							) : (
								slides
							)
						)}
					</Carousel>
				</LazyLoadComponent>
			</div>
		)
	}
}

export default Hero
