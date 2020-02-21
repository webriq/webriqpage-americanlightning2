import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import SideBarMenu from "../sidebar/sidebar"
import Sticky from "react-sticky-el"

import Logo from "../../images/logo-image.png"
import LogoText from "../../images/logo-text-only.png"
import Search from "../../images/search.svg"

import useOutsideClick from "./clickOutside"

const Header = ({ type }) => {
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
            <div className="row justify-content-between align-items-center">
              <div className="col-8">
                <div>
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
              </div>
              <div className="col-4 text-right">
                <div className="d-none d-lg-inline-block">
                  <div className="header-search">
                    <div className="search-field">
                      {!showSearch && (
                        <button
                          className="btn p-0 search-icon"
                          onClick={e => setShowSearch(true)}
                        >
                          <img src={Search} alt="Search" height="24px" />
                        </button>
                      )}

                      {showSearch && (
                        <form className="search-field" ref={ref}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                              required
                            />
                          </div>
                          <button type="submit" className="btn search-icon-btn">
                            <img src={Search} alt="Search" height="24px" />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ml-4 d-inline-block">
                  <SideBarMenu />
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
