import React from "react"
import { Link } from "gatsby"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import { LazyLoadComponent } from "react-lazy-load-image-component"

class FeaturedProducts extends React.Component {
	render() {
		const products = {
			slidesPerView: 3,
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

		console.log(this.props)
		return (
			<div className="py-10 bg-light products-swiper">
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
							<LazyLoadComponent>
								<Swiper {...products} className="pb-4">
									{this.props.products.map(prod => (
										<div className="product-item featured" key={prod.node.id}>
											<Link to={prod.node.slug.current}>
												<div className="product-image">
													<div className="v-center">
														<img
															alt=""
															className="img-fluid p-3"
															src={
																prod &&
																prod.node &&
																prod.node.productImage[0] &&
																prod.node.productImage[0].image &&
																prod.node.productImage[0].image.asset &&
																prod.node.productImage[0].image.asset.fluid &&
																prod.node.productImage[0].image.asset.fluid.src
															}
														/>
													</div>
												</div>
											</Link>
											<div className="product-desc">
												<div className="pb-3">
													<Link
														className="text-body"
														to={prod.node.slug.current}
													>
														<h5 className="font-weight-bold">
															{prod.node.title}
														</h5>
													</Link>
													<p className="small text-muted">
														{prod.node.description}
													</p>
												</div>
												<div className="product-link">
													<Link
														className="btn btn-secondary btn-sm"
														role="button"
														to={prod.node.slug.current}
													>
														More Info
													</Link>
												</div>
											</div>
										</div>
									))}
								</Swiper>
							</LazyLoadComponent>
						</div>
					</div>
					{/*<div className="row">
						<div className="col text-right">
							<div className="right-lined-btn">
								<Link className="btn btn-primary" to="/sample-category">
									Show More Products
								</Link>
							</div>
						</div>
					</div>*/}
				</div>
			</div>
		)
	}
}

export default FeaturedProducts
