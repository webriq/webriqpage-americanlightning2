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

		return (
			<div className="category-hero-section">
				<LazyLoadComponent>
					<Carousel defaultWait={5000} maxTurns={1}>
						{this.props.slider.map(slide => (
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
						))}
					</Carousel>
				</LazyLoadComponent>
			</div>
		)
	}
}

export default PrizmTapeLight
