import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import SideBarMenu from "../sidebar/sidebar"
import Sticky from "react-sticky-el"
import { Nav } from "react-bootstrap"
import Logo from "../../images/logo-image.svg"
import LogoText from "../../images/logo-text-only.svg"
import Search from "../../images/search.svg"
import SearchBar from "../search"
import useOutsideClick from "./clickOutside"
// import slugify from "slugify"
const searchIndices = [
  { name: `products`, title: `Products`, hitComp: `PostHit` },
]

const Header = ({ type, categories }) => {
  const ref = useRef()
  const [showSearch, setShowSearch] = useState()

  useOutsideClick(ref, () => {
    if (showSearch) {
      setShowSearch(false)
    }
    //
  })

  return (
    <header>
      <Sticky
        className="sticky-wrapper"
        stickyClassName="is-sticky"
        stickyStyle={{ transform: "unset", zIndex: "99" }}
      >
        <div className={`header ${type === "home" ? "transparent" : null}`}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-inline-block">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="American Lighting"
                    className="header-logo d-inline-block"
                  />
                  <img
                    src={LogoText}
                    alt="American Lighting"
                    className="header-logo-text d-none d-lg-inline-block"
                  />
                </Link>
              </div>
              <div className="d-none d-lg-inline-block">
                <div className="full-header-menu text-center">
                  {/* {categories.map(cat => (
                    <Nav.Item key={cat.node.id}>
                      <Link to={`/${slugify(cat.node.title.toLowerCase())}`}>
                        {cat.node.shortname}
                      </Link>
                    </Nav.Item>
                  ))}*/}
                  <Nav.Item>
                    <Link to="/downlighting">Downlighting</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/task-lighting">Task Lighting</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/trulux-lighting">Trulux</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/">Spektrum Smart</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/accent-lighting">Linear Lighting</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/architectural-lighting">Architectural</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/">Power Supplies</Link>
                  </Nav.Item>
                </div>
              </div>
              <div
                className="text-right d-inline-block"
                style={{ minWidth: "91px" }}
              >
                <div className="d-inline-block">
                  <div className="header-search">
                    <div className="search-field">
                      <button
                        className="btn p-0 search-icon"
                        onClick={e => setShowSearch(true)}
                      >
                        <img src={Search} alt="Search" height="18px" />
                      </button>

                      {showSearch && (
                        <div className="search-form-wrapper">
                          <form ref={ref}>
                            <div className="form-group">
                              <div className="fixed-search text-left">
                                <SearchBar collapse indices={searchIndices} />
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ml-4 d-inline-block">
                  <SideBarMenu categories={categories} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sticky>
    </header>
  )
}

export default Header
