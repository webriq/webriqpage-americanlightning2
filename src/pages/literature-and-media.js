import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, Nav } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import ProductCatalog from "../components/literature/productCatalog"
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
				<div className="literature-content-wrapper py-10">
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
									<Nav.Link eventKey={2}>
										<div>Videos</div>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey={3}>
										<div>Other Resources</div>
									</Nav.Link>
								</Nav.Item>
							</Nav>

							<Tab.Content>
								<Tab.Pane eventKey={1}>
									<LazyLoadComponent>
										<h3 className="pb-3">Catalogs</h3>
										<ProductCatalog />
									</LazyLoadComponent>
								</Tab.Pane>
								<Tab.Pane eventKey={2}>
									<h3 className="pb-3">Videos</h3>
									<div className="row">
										<LazyLoadComponent>
											<ModalVideo
												videoID="23237102"
												thumbnailImage="/img/sample-vid-thumbs/video1.png"
												videoTitle="The City Limits"
												videoDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
											/>
										</LazyLoadComponent>
										{/*<LazyLoadComponent>
											<ModalVideo
												videoID="341710528"
												thumbnailImage="/img/sample-vid-thumbs/video2.png"
												videoTitle="Colorado"
												videoDesc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
											/>
										</LazyLoadComponent>*/}
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey={3}>
									<LazyLoadComponent>
										<h2>Other Resources</h2>
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
