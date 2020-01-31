import React from "react"
import { Link } from "gatsby"
import Swiper from "react-id-swiper"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import Featured1 from "../../images/_image_framewrx_sco-stage-gt.jpg"
import Featured2 from "../../images/_image_framewrx_bol-stage-gt.jpg"
import Featured3 from "../../images/_image_framewrx_sco-stage-gt.jpg"

class FeaturedProducts extends React.Component {
	render() {
		return (
			<LazyLoadComponent>
				<div className="py-10 bg-light">
					<div className="container">
						<div className="pb-4">
							<div className="row align-items-center">
								<div className="col-9">
									<h2 className="section-heading mb-0">Featured Products</h2>
								</div>
								<div className="col-3 text-right">
									<div>
										<div className="featured-prev featured-slider-nav">
											<span>
												<i className="fa fa-angle-left" />
												Prev
											</span>
										</div>
										<span> | </span>
										<div className="featured-next featured-slider-nav">
											<span>
												<i className="fa fa-angle-right" />
												Next
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row pb-4">
							<div className="col-lg-4 mb-4">
								<div className="product-item">
									<Link to="">
										<div className="product-image">
											<div className="v-center">
												<img className="img-fluid p-3" src={Featured1} />
											</div>
										</div>
									</Link>
									<div className="product-desc">
										<div className="pb-3">
											<Link className="text-body" to="/">
												<h5 className="font-weight-bold">FrameWrx Exterior</h5>
											</Link>
											<p className="small text-muted">
												This structural favorite is smart and tailored in
												appearance, while providing a patterned effect as the
												light hits the path/ground/wall.
											</p>
										</div>
										<div className="product-link">
											<Link
												className="btn btn-secondary btn-sm"
												role="button"
												href="/"
											>
												More Info
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4">
								<div className="product-item">
									<Link to="">
										<div className="product-image">
											<div className="v-center">
												<img className="img-fluid p-3" src={Featured2} />
											</div>
										</div>
									</Link>
									<div className="product-desc">
										<div className="pb-3">
											<Link className="text-body" to="/">
												<h5 className="font-weight-bold">Adaptive Drivers</h5>
											</Link>
											<p className="small text-muted">
												These phase dimming class 2 drivers are designed to
												operate with most standard dimmers or can also be used
												with secondary side controls such as Trulux Lighting
												Systems.
											</p>
										</div>
										<div className="product-link">
											<Link
												className="btn btn-secondary btn-sm"
												role="button"
												href="/"
											>
												More Info
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4">
								<div className="product-item">
									<Link to="">
										<div className="product-image">
											<div className="v-center">
												<img className="img-fluid p-3" src={Featured3} />
											</div>
										</div>
									</Link>
									<div className="product-desc">
										<div className="pb-3">
											<Link className="text-body" to="/">
												<h5 className="font-weight-bold">FrameWrx Exterior</h5>
											</Link>
											<p className="small text-muted">
												The Stage family casts 3000K warm white LED light for
												easy integration into residential landscape lighting
												designs.
											</p>
										</div>
										<div className="product-link">
											<Link
												className="btn btn-secondary btn-sm"
												role="button"
												href="/"
											>
												More Info
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col text-right">
								<div className="right-lined-btn">
									<button className="btn btn-primary" type="button">
										Show More Products
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LazyLoadComponent>
		)
	}
}

export default FeaturedProducts
