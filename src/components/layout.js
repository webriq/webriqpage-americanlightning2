import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import Footer from "./footer/footer"
// import "./layout.css"
import "./layout.scss"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.min.css"
import "./font-face.css"

const Layout = ({ children, type }) => {
  // console.log(type)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allSanityCategory(sort: { fields: shortname, order: ASC }) {
        edges {
          node {
            title
            shortname
          }
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} type={type} />
      <main>{children}</main>
      <Footer categories={data.allSanityCategory.edges} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
