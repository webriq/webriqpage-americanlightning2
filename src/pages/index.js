import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, Nav } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import Hero from "../components/home/Hero"
import AboutUs from "../components/home/AboutUs"
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
    console.log(posts)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <Hero />

        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
          <Nav className="home-tabs nav-justified">
            <Nav.Item>
              <Nav.Link eventKey={1}>About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2}>
                <div>Featured Products</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={3}>
                <div>News & Events</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={1}>
              <LazyLoadComponent>
                <AboutUs />
              </LazyLoadComponent>
            </Tab.Pane>
            <Tab.Pane eventKey={2}>
              <LazyLoadComponent>
                <FeaturedProducts />
              </LazyLoadComponent>
            </Tab.Pane>
            <Tab.Pane eventKey={3}>
              <LazyLoadComponent>
                <NewsEvents />
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
    allSanityPost(sort: { order: ASC, fields: publishedAt }, limit: 3) {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
          slug {
            current
          }
          excerpt
          publishedAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
