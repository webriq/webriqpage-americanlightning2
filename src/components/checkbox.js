import React from "react"

const CheckboxComponent = ({ value, handleData }) => {
	return (
		<span className="subcategory" onClick={() => handleData(value)}>
			{value}
		</span>
	)
}

export default CheckboxComponent
