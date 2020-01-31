import React from "react"
import { Link } from "gatsby"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import About from "../../images/about.jpg"

class AboutUs extends React.Component {
	render() {
		return (
			<LazyLoadComponent>
				<div className="about-section py-10">
					<div className="container-fluid px-0">
						<div className="row justify-content-between align-items-center">
							<div className="col-lg-5">
								<div className="col-img-bg">
									<img src={About} alt="" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="col-right-txt">
									<h2 className="display-4 section-heading">About Us</h2>
									<p className="lead text-primary">
										American Lighting, Inc. manufactures a wide range of
										lighting solutions for your residential, commercial and
										specialty lighting needs.
									</p>
									<p className="pb-3">
										Founded in 1989, we pride ourselves in being a lighting
										solutions provider by offering our customers a broad line of
										innovative and high quality lighting products.  Continued
										innovation is a core strategic initiative at American
										Lighting, and we are committed to developing new products by
										utilizing the latest lighting technologies and designs.  We
										pledge to deliver superior customer service by employing and
										training a team of highly experienced lighting
										professionals.
									</p>
									<Link
										to="/"
										className="btn btn-primary btn-ripple"
										type="button"
									>
										Learn More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LazyLoadComponent>
		)
	}
}

export default AboutUs
