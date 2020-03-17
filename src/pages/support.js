import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Support from "../components/home/Support"
import AboutImage from "../images/about-american-lighting.jpg"

const SupportPage = () => (
	<Layout>
		<SEO
			title="About Us"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		/>
		<div class="page-headline">
			<div class="container">
				<div class="section-heading">
					<h1>Customer Support</h1>
				</div>
			</div>
		</div>
		<Support />
	</Layout>
)

export default SupportPage
