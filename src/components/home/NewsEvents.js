import React from "react"
import { Link } from "gatsby"

// import SampleNews from "../../images/lightfair.jpg"

class NewsEvents extends React.Component {
	render() {
		console.log(this.props.posts)
		console.log("posts here")
		return (
			<div className="py-10">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-6 mb-4">
							<h2 className="section-heading">News and Updates</h2>
							{this.props.posts.map(post => (
								<div className="mb-4">
									<div className="news-item">
										<Link to="/">
											<div
												className="news-item-bg"
												style={{
													backgroundImage: `url(${
														post.node.mainImage.asset.fluid.src
													})`,
												}}
											/>
										</Link>
										<div>
											<div className="pt-3">
												<div className="row align-items-center">
													<div className="col-3 col-md-2 col-lg-3">
														<div className="date">
															<div className="v-center text-center">
																<span className="day">13</span>
																<span className="month">Mar</span>
															</div>
														</div>
													</div>
													<div className="col-9 pl-0">
														<Link
															to={post.node.slug.current}
															className="text-body"
														>
															<h5 className="font-weight-bold">
																LightFair 2018 - American Lighting Inc. &amp;
																Tivoli Lighting
															</h5>
														</Link>
														<div className="small text-primary text-uppercase d-block">
															<span>
																<i className="fa fa-user" /> American Lighting
															</span>
														</div>
													</div>
												</div>
											</div>
											<p className="text-muted pt-3">
												Both American Lighting and Tivoli will be attending
												LIGHTFAIR® International (LFI®) 2018 in one of this
												years premier events for the lighting industry.
											</p>
										</div>
									</div>
									<Link
										to={post.node.slug.current}
										className="btn btn-secondary btn-sm"
									>
										Continue Reading
									</Link>
								</div>
							))}
						</div>
						<div className="col-lg-5">
							<h2 className="section-heading">Events</h2>
							<div className="event-item">
								<div className="row align-items-center">
									<div className="col-3 col-md-2 col-lg-3">
										<div className="date">
											<div className="v-center text-center">
												<span className="day">09</span>
												<span className="month">May</span>
											</div>
										</div>
									</div>
									<div className="col-9 pl-0">
										<Link to="/" className="text-body">
											<h5 className="font-weight-bold">
												American Lighting Inc. - Booth #102 Tivoli Lighting -
												Booth #4179
											</h5>
										</Link>
										<div className="small text-primary text-uppercase d-block">
											<span>
												<i className="fa fa-map-marker pr-1" />
												McCormick Place Convention Center, Chicago, IL
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="event-item">
								<div className="row align-items-center">
									<div className="col-3 col-md-2 col-lg-3">
										<div className="date">
											<div className="v-center text-center">
												<span className="day">23</span>
												<span className="month">Apr</span>
											</div>
										</div>
									</div>
									<div className="col-9 pl-0">
										<Link to="/" className="text-body">
											<h5 className="font-weight-bold">
												Tivoli Lighting CinemaCon 2017 - Booth #301F
											</h5>
										</Link>
										<div className="small text-primary text-uppercase d-block">
											<span>
												<i className="fa fa-map-marker pr-1" />
												Caesars&#39; Palace Event Center, Las Vegas, NV
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="event-item">
								<div className="row align-items-center">
									<div className="col-3 col-md-2 col-lg-3">
										<div className="date">
											<div className="v-center text-center">
												<span className="day">23</span>
												<span className="month">Apr</span>
											</div>
										</div>
									</div>
									<div className="col-9 pl-0">
										<Link to="/" className="text-body">
											<h5 className="font-weight-bold">
												Tivoli Lighting CinemaCon 2017 - Booth #301F
											</h5>
										</Link>
										<div className="small text-primary text-uppercase d-block">
											<span>
												<i className="fa fa-map-marker pr-1" />
												Caesars&#39; Palace Event Center, Las Vegas, NV
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsEvents
