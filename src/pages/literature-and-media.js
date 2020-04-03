import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, Nav } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import ModalVideo from "../components/literature/ModalVideo"

class LiteratureAndMedia extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)

		this.state = {
			show: false,
		}
	}

	handleClose() {
		this.setState({ show: false })
	}

	handleShow() {
		this.setState({ show: true })
	}

	render() {
		const siteTitle = this.props.data.site.siteMetadata.title
		const siteDescription = this.props.data.site.siteMetadata.description

		return (
			<Layout location={this.props.location} title={siteTitle} type="home">
				<SEO title="Literature and Media" description={siteDescription} />
				<div class="page-headline">
					<div class="container">
						<div class="section-heading">
							<h1>Literature and Media</h1>
						</div>
					</div>
				</div>
				<div className="page-content literature-content-wrapper">
					<div className="container">
						<Tab.Container defaultActiveKey={1}>
							<Nav
								className="home-tabs nav-justified"
								style={{ position: "relative" }}
							>
								<Nav.Item>
									<div>
										<Nav.Link eventKey={1}>Catalogs</Nav.Link>
									</div>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey={2}>Videos</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey={3}>Other Resources</Nav.Link>
								</Nav.Item>
							</Nav>

							<Tab.Content>
								<Tab.Pane eventKey={1}>
									<LazyLoadComponent>
										<h2 class="section-heading">Catalogs</h2>
									</LazyLoadComponent>
								</Tab.Pane>
								<Tab.Pane eventKey={2}>
									<h2 class="section-heading">Videos</h2>
									<div className="row">
										<LazyLoadComponent>
											<ModalVideo
												videoID="23237102"
												thumbnailImage="/img/sample-vid-thumbs/video1.png"
												videoTitle="The City Limits"
												videoDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
											/>
										</LazyLoadComponent>
										<LazyLoadComponent>
											<ModalVideo
												videoID="341710528"
												thumbnailImage="/img/sample-vid-thumbs/video2.png"
												videoTitle="Colorado"
												videoDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
											/>
										</LazyLoadComponent>
										<LazyLoadComponent>
											<ModalVideo
												videoID="11016295"
												thumbnailImage="/img/sample-vid-thumbs/video3.png"
												videoTitle="Late Nights and City Lights"
												videoDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
											/>
										</LazyLoadComponent>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey={3}>
									<LazyLoadComponent>
										<h2 class="section-heading">Other Resources</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<p>
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
									</LazyLoadComponent>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</div>
				</div>
			</Layout>
		)
	}
}

export default LiteratureAndMedia

export const literatureAndMediaQuery = graphql`
	query literatureAndMediaQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`
