import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutImage from "../images/about-american-lighting.jpg"

const AboutPage = () => (
	<Layout>
		<SEO title="About Us" description="" />
		<div class="page-headline">
			<div class="container">
				<div class="section-heading">
					<h1>RGA REQUEST | PRICE DISPUTE | FREIGHT CREDIT FORM</h1>
				</div>
			</div>
		</div>
		<div class="page-content">
			<div class="container">
				<div className="row">
					<iframe
						title="Embedded Wufoo Form"
						id="wufooFormq1rbtaja0j06hev"
						class="wufoo-form-container"
						allowtransparency="true"
						frameborder="0"
						scrolling="no"
						style={{
							width: "100%",
							minHeight: "812px",
							height: "100%",
							border: "none",
						}}
						src="https://soyy.wufoo.com/embed/q1rbtaja0j06hev/def/embedKey=q1rbtaja0j06hev366213&amp;entsource=&amp;referrer=http%3Awuslashwuslashwww.americanlighting.comwuslashsupport.html"
					>
						<a
							href="https://soyy.wufoo.com/forms/q1rbtaja0j06hev/"
							title="html form"
						>
							Fill out my Wufoo form!
						</a>
					</iframe>
				</div>
			</div>
		</div>
	</Layout>
)

export default AboutPage
