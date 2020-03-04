import React from "react"
import "swiper/css/swiper.css"
// import { Tab, Nav } from "react-bootstrap"

class ProductCatalogs extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)

		this.state = {
			show: false,
		}
	}

	handleClose() {
		this.setState({ show: false })
	}

	handleShow() {
		this.setState({ show: true })
	}

	render() {
		console.log(this.props)
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
				<div className="row">
					<div className="col-md-6">
						<a href="#">American Lighting 2020 Catalog</a>
					</div>
				</div>
			</div>
		)
	}
}

export default ProductCatalogs
