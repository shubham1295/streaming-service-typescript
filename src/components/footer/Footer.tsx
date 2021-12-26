import React from "react";
import "./style.css";
import logo from "../../images/logo1.png";

const Footer = () => {
  return (
    <footer className="ht-footer">
      <div className="container">
        <div className="flex-parent-ft">
          <div className="flex-child-ft item1">
            <a href="index.html">
              <img className="logo" src={logo} alt="" />
            </a>
            <p>
              5th Avenue st, manhattan
              <br />
              New York, NY 10001
            </p>
            <p>
              Call us: <a href="#">(+01) 202 342 6789</a>
            </p>
          </div>
          <div className="flex-child-ft item2">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blockbuster</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex-child-ft item3">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
          <div className="flex-child-ft item5">
            <h4>Announcement</h4>
            <p>
              Cineb.net does not store any files on our server,
              <br /> we only linked to the media which is hosted on 3rd party
              services.
            </p>
          </div>
        </div>
      </div>
      <div className="ft-copyright">
        <div className="ft-left">
          <p>© 2017 Blockbuster. All Rights Reserved. Designed by leehari.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
