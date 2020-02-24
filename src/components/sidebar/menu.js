import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"

export default () => (
	<div className="navigation">
		<Nav className="flex-column">
			<div>
				<h6 className="menu-title">Products</h6>
				<Nav.Item>
					<Link to="/">Downlighting</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Task Lighting</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Trulux Lighting Systems</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Spektrum Smart Lighting</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Linear Lighting</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Architectural Lighting</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Power Supplies</Link>
				</Nav.Item>
			</div>
			<div className="mt-5">
				<h6 className="menu-title">Resources</h6>
				<Nav.Item>
					<Link to="/">Literature & Media</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Where to Buy</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Customer Support</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Contact Us</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/">Company</Link>
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
