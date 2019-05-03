import React from "react";

const Nav = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <h3 className="sig">Jeremy L. Shepherd | Dayton Photographer</h3>
    </div>
    <div className="navbar-menu">
      <input id="navbar-check" type="checkbox" className="checkbox" />
      <label htmlFor="navbar-check">
        <span className="icon-bar ib-top" />
        <span className="icon-bar ib-mid" />
        <span className="icon-bar ib-bot" />
      </label>
      <span className="navbar-nav">
        <a
          className="nav-link"
          href="https://www.facebook.com/jeremylshepherdphotography"
        >
          <i className="fa fa-facebook-official fa-2x" />
        </a>
        <a className="nav-link" href="https://twitter.com/jeremylshepherd">
          <i className="fa fa-twitter-square fa-2x" />
        </a>
        <a
          className="nav-link "
          href="https://www.instagram.com/jeremylshepherdphotography"
        >
          <i className="fa fa-instagram fa-2x" />
        </a>
      </span>
    </div>
  </nav>
);

export default Nav;
