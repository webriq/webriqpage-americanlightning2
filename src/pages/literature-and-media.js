import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, Nav } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import ModalVideo from "../components/literature/ModalVideo"
import ProductCatalog from "../components/literature/productCatalog"

import AmLight2020 from "../images/catalog_thumbnails/2020 al cover_-u193120-fr.png"
import AmLight2019 from "../images/catalog_thumbnails/american lighting 2019 cover-u184642-fr.png"
import AmLightProd2019 from "../images/catalog_thumbnails/american lighting 2019 product guide cover_page_001.jpg"
import Seasonal2019 from "../images/catalog_thumbnails/_thumb_al_seasonalcat_2019_cover.jpg"
import TruluxLightSys from "../images/catalog_thumbnails/_thumb_catalog_trulux.png"
import LuneFX from "../images/catalog_thumbnails/_thumb_lumefx-brochure.jpg"
import FrameWRX from "../images/catalog_thumbnails/_thumb_framewrx-brochure.jpg"
import TruluxCC from "../images/catalog_thumbnails/_thumb_brochure_truluxcc.jpg"
import TruluxSingleColor from "../images/catalog_thumbnails/_thumb_form-truluxcc-singlecolor.jpg"
import TruluxCCTunable from "../images/catalog_thumbnails/_thumb_form-truluxcc-tunable.jpg"
import TruluxCCRGB from "../images/catalog_thumbnails/_thumb_form-truluxcc-rgb.jpg"

const catalogs = [
	{
		title: "American Lighting 2020 Catalog",
		thumbnail: AmLight2020,
		url:
			"http://www.americanlighting.com/assets/_catalog_american-lighting-2020_rev2005.pdf",
	},
	{
		title: "American Lighting 2019 Catalog",
		thumbnail: AmLight2019,
		url:
			"http://www.americanlighting.com/assets/_catalog_american-lighting-2019-catalog_web.pdf",
	},
	{
		title: "American Lighting Product Guide 2019",
		thumbnail: AmLightProd2019,
		url:
			"http://americanlighting.com/catalogs/American-Lighting-2019-Product-Guide",
	},
	{
		title: "Seasonal 2019 Catalog",
		thumbnail: Seasonal2019,
		url: "http://americanlighting.com/catalogs/AL_SeasonalCat_2019",
	},
	{
		title: "Trulux Lighting Systems",
		thumbnail: TruluxLightSys,
		url: "http://www.americanlighting.com/assets/_catalog_trulux2016.pdf",
	},
	{
		title: "LuneFX Tunable Lighting",
		thumbnail: LuneFX,
		url: "http://americanlighting.com/catalogs/_LumeFX_rev1753",
	},
	{
		title: "FrameWRX Exterior",
		thumbnail: FrameWRX,
		url: "http://americanlighting.com/catalogs/_FrameWRX_rev1753",
	},
	{
		title: "Trulux Custom Cut Brochure",
		thumbnail: TruluxCC,
		url: "http://www.americanlighting.com/assets/_brochure_truluxcustomcut.pdf",
	},
	{
		title: "Trulux Custom Cut Single Color Order Form",
		thumbnail: TruluxSingleColor,
		url:
			"http://www.americanlighting.com/assets/_form_truluxcc-singlecolor_int.pdf",
	},
	{
		title: "Trulux Custom Cut Tunable CCT Order Form",
		thumbnail: TruluxCCTunable,
		url:
			"http://www.americanlighting.com/assets/_form_truluxcc-tunable_int.pdf",
	},
	{
		title: "Trulux Custom Cut RGB/RGB+WW Order Form",
		thumbnail: TruluxCCRGB,
		url: "http://www.americanlighting.com/assets/_form_truluxcc-rgb_int.pdf",
	},
]

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
										<h2 class="section-heading">Catalogs & Materials</h2>
										<ProductCatalog catalogs={catalogs} />
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
