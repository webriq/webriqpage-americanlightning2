import React from "react"
import "swiper/css/swiper.css"
// import { Tab, Nav } from "react-bootstrap"

class ProductCatalogs extends React.Component {
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
				<div className="row pt-5 justify-content-center">
					{this.props.catalogs.map(catalog => (
						<div className="col-md-3 mb-4 text-center">
							<div className="catalog-item">
								<a href={catalog.url} target="_blank" rel="noopener noreferrer">
									<img src={catalog.thumbnail} className="img-fluid" alt="" />
									<p className="text-uppercase mt-3 small text-body">
										{catalog.title}
									</p>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default ProductCatalogs
