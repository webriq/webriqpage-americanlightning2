import React, { useState } from "react"
import { Form } from "react-bootstrap"

const CheckboxComponent = ({ value, handleData }) => {
	return (
		<span className="subcategory" onClick={() => handleData(value)}>
			{value}
		</span>
	)
}

export default CheckboxComponent
