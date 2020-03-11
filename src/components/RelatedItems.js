import React from "react"
import { Link } from "gatsby"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import { LazyLoadComponent } from "react-lazy-load-image-component"

class FeaturedProducts extends React.Component {
	render() {
		const products = {
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay: false,
			navigation: {
				nextEl: "#featured-next",
				prevEl: "#featured-prev",
			},
			breakpoints: {
				767: {
					sliderserView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
		}

		console.log("this.props", this.props)
		return (
			<div className="related-items-wrapper">
				<div className="container">
					<div className="swiper-nav v-center" style={{ zIndex: "2" }}>
						<div className="swiper-arrow-left" id="featured-prev">
							<i className="fa fa-angle-left" />
						</div>
						<div className="swiper-arrow-right" id="featured-next">
							<i className="fa fa-angle-right" />
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-9 col-sm-10">
							<h5 className="bordered-heading">Related Items</h5>
							<LazyLoadComponent>
								<Swiper {...products}>
									{this.props.items ? (
										this.props.items.map(item => (
											<div className="product-item featured mb-3" key={item.id}>
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																alt=""
																className="img-fluid p-3"
																src={item.productImage[0].image.asset.fluid.src}
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc text-center p-3">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold text-uppercase">
																{item.title}
															</h6>
														</Link>
														<p className="small text-muted m-0">
															{item.description.length > 120
																? item.description.substring(0, 120) + `...`
																: item.description}
														</p>
													</div>
												</div>
											</div>
										))
									) : (
										<React.Fragment>
											<div className="product-item featured mb-3">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																alt=""
																className="img-fluid p-3"
																src="/img/sample-products/senik-g1-bk.png"
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc text-center p-3">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold text-uppercase">
																Senik G1 Graze
															</h6>
														</Link>
														<p className="small text-muted m-0">
															24W / 730-2200Lm
														</p>
													</div>
												</div>
											</div>
											<div className="product-item featured mb-3">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																alt=""
																className="img-fluid p-3"
																src="/img/sample-products/senik-g2-wh.png"
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc text-center p-3">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold text-uppercase">
																Senik G2 Graze
															</h6>
														</Link>
														<p className="small text-muted m-0">
															48W / 1400-3000Lm
														</p>
													</div>
												</div>
											</div>
											<div className="product-item featured mb-3">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																alt=""
																className="img-fluid p-3"
																src="/img/sample-products/senik-g3-sv.png"
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc text-center p-3">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold text-uppercase">
																Senik G3 Graze
															</h6>
														</Link>
														<p className="small text-muted m-0">
															72W / 1900-3100Lm
														</p>
													</div>
												</div>
											</div>
											<div className="product-item featured mb-3">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																alt=""
																className="img-fluid p-3"
																src="/img/sample-products/senik-g4-bk.png"
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc text-center p-3">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold text-uppercase">
																Senik G4 Graze
															</h6>
														</Link>
														<p className="small text-muted m-0">
															96W / 2250-3500Lm
														</p>
													</div>
												</div>
											</div>
											<div className="product-item featured mb-3">
												<Link to="/">
													<div className="product-image">
														<div className="v-center">
															<img
																alt=""
																className="img-fluid p-3"
																src="/img/sample-products/senik-wwa40-bk548x450.png"
															/>
														</div>
													</div>
												</Link>
												<div className="product-desc text-center p-3">
													<div>
														<Link className="text-body" to="/">
															<h6 className="font-weight-bold text-uppercase">
																Senik A40X Array
															</h6>
														</Link>
														<p className="small text-muted m-0">
															162W / 4000-9100Lm
														</p>
													</div>
												</div>
											</div>
										</React.Fragment>
									)}
								</Swiper>
							</LazyLoadComponent>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FeaturedProducts
