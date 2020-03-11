import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import marked from "marked"
import Carousel from "../Carousel"
import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"

class PrizmTapeLight extends React.Component {
	render() {
		console.log(this.props)
		console.log("test")

		function makeSlide(tagline, name, pic, link, button) {
			return (
				<Fade wait={7000} key={tagline}>
					<div>
						<div className="category-banner">
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
												<Link to={link} className="btn btn-primary">
													{button}
												</Link>
											</Flip>
										</div>
									</Col>
								</Row>
							</Container>
							<div
								className="category-banner-bg"
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
				pic: "/img/category-carousels/prizm/tls-series-tape-light.jpg",
				link: "/sample-product",
				button: "Sample Button",
			},
			{
				tagline:
					"Need custom color temperature lighting at the turn of a dial?",
				name: "TLS Tunable CCT Series",
				pic: "/img/category-carousels/prizm/tls-tunable-cct.jpg",
				link: "/sample-product-with-splash",
				button: "Sample Button",
			},
		]

		slides = conf.map(slide =>
			makeSlide(slide.tagline, slide.name, slide.pic, slide.link, slide.button)
		)

		return (
			<div className="category-hero-section">
				<LazyLoadComponent>
					<Carousel defaultWait={5000} maxTurns={1}>
						{this.props.slider.length !== 0
							? this.props.slider.map(slide => (
									<Fade wait={7000} key={slide.title}>
										<div>
											<div className="category-banner">
												<Container>
													<Row>
														<Col
															xs={{ span: 8, offset: 2 }}
															md={{ span: 7, offset: 1 }}
														>
															<div className="text-left">
																<Fade right delay={500} opposite>
																	<h3 className="display-4 m-0">
																		{slide.title || null}
																	</h3>
																</Fade>
																<Fade bottom delay={1500} opposite>
																	<div
																		className="py-4 lead"
																		dangerouslySetInnerHTML={{
																			__html: marked(slide.description || null),
																		}}
																	/>
																</Fade>
																<Flip bottom delay={2000} opposite>
																	<Link
																		to={slide.pagelink.current}
																		className="btn btn-primary"
																	>
																		{slide.pagelinkname}
																	</Link>
																</Flip>
															</div>
														</Col>
													</Row>
												</Container>
												<div
													className="category-banner-bg"
													style={{
														backgroundImage: `url(${
															slide.banner !== null
																? slide.banner.asset.fluid.src
																: "/img/category-carousels/prizm/tls-tunable-cct.jpg"
														})`,
														backgroundSize: "cover",
														backgroundRepeat: "no-repeat",
														backgroundPosition: "center center",
													}}
												/>
											</div>
										</div>
									</Fade>
							  ))
							: slides}
					</Carousel>
				</LazyLoadComponent>
			</div>
		)
	}
}

export default PrizmTapeLight
