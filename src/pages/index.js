import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, Nav } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import HeroCarousel from "../components/carousels/homepageCarousel"
import AmericanLightingUniversity from "../components/home/AmericanLightingUniversity"
import FeaturedProducts from "../components/home/FeaturedProducts"
import NewsEvents from "../components/home/NewsEvents"

class IndexPage extends React.Component {
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
    const posts = this.props.data.allSanityPost.edges
    const products = this.props.data.allSanityProduct.edges
    const events = this.props.data.allSanityEvent.edges
    // console.log(this.props.data)
    return (
      <Layout location={this.props.location} title={siteTitle} type="home">
        <SEO title="Home" description={siteDescription} />
        <HeroCarousel sliders={this.props.data.allSanityHomeBanner.edges} />

        <Tab.Container defaultActiveKey={2}>
          <Nav className="home-tabs nav-justified">
            <Nav.Item>
              <Nav.Link eventKey={1}>News & Events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2}>
                <div>Featured Products</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={3}>
                <div>American Lighting University</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey={1}>
              <LazyLoadComponent>
                <NewsEvents posts={posts} events={events} />
              </LazyLoadComponent>
            </Tab.Pane>
            <Tab.Pane eventKey={2}>
              <LazyLoadComponent>
                <FeaturedProducts products={products} />
              </LazyLoadComponent>
            </Tab.Pane>
            <Tab.Pane eventKey={3}>
              <LazyLoadComponent>
                <AmericanLightingUniversity />
              </LazyLoadComponent>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allSanityPost(sort: { fields: publishedAt, order: ASC }, limit: 2) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
          authors {
            person {
              name
            }
          }
          excerpt
          publishedAt(formatString: "MMMM DD, YYYY")
          authors {
            person {
              id
              name
            }
          }
        }
      }
    }

    allSanityEvent(limit: 3) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          publishedAt
          categories
        }
      }
    }

    allSanityProduct(limit: 20, sort: { fields: title, order: ASC }) {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
          productImage {
            image {
              asset {
                fluid(maxHeight: 200, maxWidth: 283) {
                  src
                }
              }
            }
          }
        }
      }
    }
    allSanityHomeBanner {
      edges {
        node {
          id
          title
          description
          animation
          banner {
            asset {
              fluid {
                src
              }
            }
          }
          pagelinkname
          pagelink {
            current
          }
        }
      }
    }
  }
`
