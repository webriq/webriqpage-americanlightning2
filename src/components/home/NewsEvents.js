import React from "react"
import { Link } from "gatsby"
import moment from "moment"
// import SampleNews from "../../images/lightfair.jpg"

class NewsEvents extends React.Component {
	render() {
		console.log(this.props)
		console.log("posts here")
		return (
			<div className="py-10">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-6 mb-4">
							<h2 className="section-heading">News and Updates</h2>
							{this.props.posts.map(post => (
								<div className="mb-4" key={post.node.id}>
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
																<span className="day">
																	{moment(post.node.publishedAt).format("d")}
																</span>
																<span className="month">
																	{moment(post.node.publishedAt).format("MMM")}
																</span>
															</div>
														</div>
													</div>
													<div className="col-9 pl-0">
														<Link
															to={post.node.slug.current}
															className="text-body"
														>
															<h5 className="font-weight-bold">
																{post.node.title}
															</h5>
														</Link>
														<div className="small text-primary text-uppercase d-block">
															{post.node.authors.length !== 0
																? post.node.authors.map(atr => (
																		<span key={atr.person.id}>
																			<i className="fa fa-user" />{" "}
																			{atr.person.name}
																		</span>
																  ))
																: null}
														</div>
													</div>
												</div>
											</div>
											<p className="text-muted pt-3">{post.node.excerpt}</p>
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
							{this.props.events.map(event => (
								<div className="event-item" key={event.node.id}>
									<div className="row align-items-center">
										<div className="col-3 col-md-2 col-lg-3">
											<div className="date">
												<div className="v-center text-center">
													<span className="day">
														{moment(event.node.publishedAt).format("d")}
													</span>
													<span className="month">
														{moment(event.node.publishedAt).format("MMM")}
													</span>
												</div>
											</div>
										</div>
										<div className="col-9 pl-0">
											<Link to={event.node.slug.current} className="text-body">
												<h5 className="font-weight-bold">{event.node.title}</h5>
											</Link>
											<div className="small text-primary text-uppercase d-block">
												{event.node.categories.length !== 0
													? event.node.categories.map(ecat => (
															<span key={ecat}>
																<i className="fa fa-map-marker pr-1" />
																{ecat}
															</span>
													  ))
													: null}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsEvents
