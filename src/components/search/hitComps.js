import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"
export const PageHit = clickHandler => ({ hit }) => (
	<div>
		{console.log("mga hits", hit)}
		<Link to="/" onClick={clickHandler}>
			<h4>
				<Highlight attribute="title" hit="/" tagName="mark" />
			</h4>
		</Link>
		<Snippet attribute="excerpt" hit="/" tagName="mark" />
	</div>
)
export const PostHit = clickHandler => ({ hit }) => (
	<div>
		{console.log("mga hits", hit)}
		<Link to={hit.node.slug.current} onClick={clickHandler}>
			<p className="mb-0">{hit.node.title}</p>
		</Link>
		{/*<div>
			<p>{hit.node.description}</p>
		</div>*/}
		<Snippet attribute="excerpt" hit="/" tagName="mark" />
	</div>
)
