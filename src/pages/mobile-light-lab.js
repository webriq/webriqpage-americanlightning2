import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import lightLabCar from "../images/light-lab-car.jpg"

const LightLab = () => (
	<Layout>
		<SEO title="Mobile Led Light Lab" description="" />
		<div class="page-headline">
			<div class="container">
				<div class="section-heading">
					<h1>MOBILE LED LIGHT LAB</h1>
				</div>
			</div>
		</div>
		<div class="page-content">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-md-6 order-2 order-md-1">
						<p>
							American Lighting's Mobile LED Light Lab (MLab) is a mobile
							lighting showroom featuring our cutting edge LED products for
							residential, commercial and specialty lighting applications as
							well as our popular line of undercabinet lights and many other
							products.
						</p>

						<p className="pt-3 font-weight-bold">
							Please contact your rep if you are interested in setting up a
							visit.
						</p>
						<h4 className="mt-5">MOBILE LIGHT LAB TOUR 2017</h4>
						<div className="row">
							<div className="col-md-4">
								<h5>DATE / TIME</h5>
								<p className="font-weight-bold">
									Tuesday
									<br />
									May 1st, 2018
									<br />
									7:00A.M.-10:00A.M.
								</p>
							</div>
							<div className="col-md-4">
								<h5>LOCATION</h5>
								<p className="font-weight-bold">
									Willow Electrical Supply Co, Inc.
								</p>
							</div>
							<div className="col-md-4">
								<h5>ADDRESS</h5>
								<p>
									3828 Des Plaines River Road Schiller Park, IL 60176 PH:
									847-801-5010
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-6 order-1 order-md-2 text-center pb-5 pb-md-0">
						<img class="img-fluid" src={lightLabCar} alt="Light Lab Car" />
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default LightLab
