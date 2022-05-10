import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <img src={logo} alt="logo" style={{width : "40px" , height:"40px" ,marginRight : "5px" , borderRadius :"4.5px",filter: `${props.mode==="light" ? "invert(1)" :" invert(0)"}`}}/>
        <span className="navbar-brand">
          Wrap
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"   
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Text Editor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/SpeedTest">
                Speed Type
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{
                  backgroundColor: `${
                    props.mode === "light" ? "#f8f9fa" : "#212529"
                  }`,
                  color: '#000000'
                }}
              >
                <li>
                  <Link className="dropdown-item" to="/about" style={{color: `${props.mode === "light" ? "black" : "white"}`}}>
                    About & Contact
                  </Link>
                </li>
                
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li onClick={props.toggleMode}>
                  <Link className="dropdown-item" to="/" style={{color: `${props.mode === "light" ? "black" : "white"}`}}>
                    {props.mode === "light" ? "Dark" : "Light"} Mode
                  </Link>
                </li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
