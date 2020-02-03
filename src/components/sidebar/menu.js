import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
// import "./menu.css"

export default () => (
	<div className="navigation">
		<Nav className="flex-column">
			<Nav.Item>
				<Link to="/">Home</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">About Us</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">Mobile Light Lab</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">Where to Buy</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">Customer Support</Link>
			</Nav.Item>
		</Nav>
	</div>
)
