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
					<h1>About Us</h1>
				</div>
			</div>
		</div>
		<div class="page-content">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-md-6 order-2 order-md-1">
						<p>
							Founded in 1989, American Lighting, Inc. manufactures a wide range
							of lighting solutions for your residential, commercial and
							specialty lighting needs. We pride ourselves in being a lighting
							solutions provider by offering our customers a broad line of
							innovative and high quality lighting products. Continued
							innovation is a core strategic initiative at American Lighting,
							and we are committed to developing new products by utilizing the
							latest lighting technologies and designs. We pledge to deliver
							superior customer service by employing and training a team of
							highly experienced lighting professionals.
						</p>
						<p>
							American Lighting's knowledgeable and dedicated sales team is here
							to provide you with product information as well as answer any
							questions you may have.
						</p>
						<p className="pt-3">
							<span className="font-weight-bold">Jason Elrod</span>
							<br />
							Vice President of Sales & Marketing
						</p>
					</div>
					<div class="col-md-6 order-1 order-md-2 text-center pb-5 pb-md-0">
						<img class="img-fluid" src={AboutImage} alt="American Lighting" />
					</div>
				</div>
				<div class="row justify-content-between align-items-center pt-5">
					<div class="col-md-12">
						<h6 className="text-uppercase text-primary">
							Residential, Commercial Lighting & OEM
						</h6>
						<p>
							<span className="font-weight-bold">Jason Elrod</span> - Vice
							President of Sales & Marketing
						</p>
						<h6 className="text-uppercase text-primary pt-3">
							Lighting Showrooms
						</h6>
						<p>
							<span className="font-weight-bold">Jennifer Kirkpatrick</span> -
							Sales Manager
						</p>
						<h6 className="text-uppercase text-primary pt-3">
							Seasonal & Decorative Lighting
						</h6>
						<p>
							<span className="font-weight-bold">Judith Jochems</span> - Sales
							Manager
							<br />
							<span className="font-weight-bold">Marissa Jaramillo</span> -
							Account Manager
						</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default AboutPage
