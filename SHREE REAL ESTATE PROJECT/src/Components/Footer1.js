import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export class Footer extends Component {
  render() {
    var footerStyle = {
      position: "relative",

      backgroundColor: "#474d4e",
      color: "white",
      textAlign: "center",
      padding: "50px 50px 50px",
      margin: "50",
      top: "20vh",
    };

    const style2 = {
      padding: "20px",
      textAlign: "center",
      float: "left",
      color: "white",
    };
    return (
      <div className="footer" style={footerStyle}>
        {}

        <div>
          <ul className="nav-menu">
            <a href="#" style={style2}>
              &nbsp;Instagram&nbsp;
            </a>
            <a href="#" style={style2}>
              &nbsp;Linkedin&nbsp;
            </a>
            <a href="#" style={style2}>
              &nbsp;Twitter&nbsp;
            </a>

            <li style={style2} className="nav-links">
              <Link to="/AboutUs">About Us</Link>
            </li>
            <a href="#" style={style2}>
              &copy;Enigma
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
