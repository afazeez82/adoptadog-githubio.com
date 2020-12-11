import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
            FurEver Home Rescue
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/adopt" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/adopt">
                  Adopt
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/donate" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/getInvolved" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/getInvolved">
                  Get Involved
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/blog" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);