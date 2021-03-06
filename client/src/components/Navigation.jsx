import React from "react";
import { Link, withRouter } from "react-router-dom";
//import Auth from '../utils/auth'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'


function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://github.com/caropukenis/adoptAdogImageRepo/blob/main/vecteezy_bulldog_1200012.png?raw=true" alt="logo" style={{ height: "30px", margin: "10px" }}></img>
            FurEver Home Rescue
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/adopt" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/adopt">
                  Adopt
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/donate" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/getInvolved" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/getInvolved">
                  Get Involved
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <li
                className={`nav-item  ${props.location.pathname === "/blog" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li> */}
              <LoginButton />
              <LogoutButton />

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);