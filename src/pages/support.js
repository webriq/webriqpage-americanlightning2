import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Support from "../components/home/Support"

const SupportPage = () => (
	<Layout>
		<SEO title="Customer Support" description="" />
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
