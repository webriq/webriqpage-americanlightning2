import React, { useState } from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const ProductAccordion = ({ eventKey, heading, children }) => {
	const [open, setOpen] = useState(false)
	console.log(eventKey)

	return (
		<>
			<Accordion.Toggle
				as={Card.Header}
				eventKey={eventKey}
				onClick={() => setOpen(!open)}
				className={open ? "opened" : ""}
			>
				<div className="accordion-heading">{heading}</div>
			</Accordion.Toggle>
			<Accordion.Collapse eventKey={eventKey}>
				<Card.Body>{children}</Card.Body>
			</Accordion.Collapse>
		</>
	)
}

export default ProductAccordion
