import React, { useEffect } from "react"
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
  function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
      element.addEventListener(eventName, eventHandler, false)
    } else if (element.attachEvent) {
      element.attachEvent("on" + eventName, eventHandler)
    }
  }

  // Send a message to the parent
  const sendMessage = function (msg) {
    // Make sure you are sending a string, and to stringify JSON
    window.parent.postMessage(msg, "*")
  }

  useEffect(() => {
    console.log("sendBackMessage initiated!")

    bindEvent(window, "message", function (e) {
      console.log("message received at iFrame!")
      console.log("e", e)
    })

    let sendBackCount = 1
    const sendBackMessage = setInterval(function () {
      if (sendBackCount > 100) {
        clearInterval(sendBackMessage)
      }

      console.log("Sending message: ALIVE - Count: " + sendBackCount)
      sendMessage("ALIVE")
      sendBackCount = sendBackCount + 1
    }, 3000)

    // Unload
    return () => {
      console.log("sendBackMessage unloaded!")
      clearInterval(sendBackMessage)
    }
  }, [])

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
            id
            title
            shortname
          }
        }
      }
    }
  `)
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        categories={data.allSanityCategory.edges}
        type={type}
      />
      <main>{children}</main>
      <Footer categories={data.allSanityCategory.edges} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
