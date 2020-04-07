import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
// import slugify from "slugify"
export default props => {
	return (
		<div className="navigation">
			<Nav className="flex-column">
				<div>
					<h6 className="menu-title">Products</h6>
					{/*{props.categories.map(cats => (
						<Nav.Item key={cats.node.id}>
							<Link to={`/${slugify(cats.node.title.toLowerCase())}`}>
								{cats.node.shortname}
							</Link>
						</Nav.Item>
					))}*/}
					<Nav.Item>
						<Link to="/downlighting">Downlighting</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/task-lighting">Task Lighting</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/trulux-lighting">Trulux Lighting Systems</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/">Spektrum Smart Lighting</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/accent-lighting">Linear Lighting</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/architectural-lighting">Architectural Lighting</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/">Power Supplies</Link>
					</Nav.Item>
				</div>
				<div className="mt-5">
					<h6 className="menu-title">Resources</h6>
					<Nav.Item>
						<Link to="/literature-and-media">Literature & Media</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/where-to-buy">Where to Buy</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/support">Customer Support</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/contact">Contact Us</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/about-us">Company</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/">Warranties</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/">Rep Login</Link>
					</Nav.Item>
				</div>
			</Nav>
		</div>
	)
}
