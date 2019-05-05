import React from "react";

const Footer = () => (
  <nav className="navbar footer">
    <a href="tel:9375021195" aria-label="Telephone link to 937-502-1195">
      <i className="fa fa-phone" aria-hidden="true" />
      <span className="footer-text"> 937.502.1195 </span>
    </a>
    <a
      href="mailto:jeremy@jeremylshepherd.com?Subject=Inquiry"
      aria-label="Email link to jeremy@jeremylshepherd.com"
    >
      <i className="fa fa-envelope-o" aria-hidden="true" />
      <span className="footer-text"> jeremy@jeremylshepherd.com </span>
    </a>
  </nav>
);

export default Footer;
