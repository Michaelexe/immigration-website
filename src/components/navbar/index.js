import React, { useEffect, useRef, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { NavLink, useLocation } from "react-router-dom";

import "./styles.css";
import logoPNG from "../../assets/logo.png";

function Navbar() {
  const navbarRef = useRef();
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 200 && location.pathname === "/") {
        navbarRef.current.classList.remove("scrolled");
      } else {
        navbarRef.current.classList.add("scrolled");
      }
    };
    if (location.pathname !== "/") {
      navbarRef.current.classList.add("scrolled");
    } else {
      navbarRef.current.classList.remove("scrolled");
    }
  }, [location]);

  if (window.innerWidth > 900) {
    return (
      <div className="navbar" ref={navbarRef}>
        <img src={logoPNG} alt="" className="logo" />
        <ul className="pages">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Reviews"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/FAQ"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
        <div className="contacts">
          <div className="contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
            </svg>
            <div>
              <span className="header">
                <b>Email:</b>
              </span>
              <span>contact@canadaprcalling.com</span>
            </div>
          </div>
          <div className="contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
            </svg>
            <div>
              <span className="subtext">
                <b>Phone:</b>
              </span>
              <span>+1 877-693-1119</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="navbar" ref={navbarRef}>
          <img src={logoPNG} alt="" className="logo" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="menu-icon"
            viewBox="0 0 50 50"
            onClick={() => {
              setMenu(true);
            }}
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </div>
        <Drawer
          anchor="right"
          open={menu}
          onClose={() => {
            setMenu(false);
          }}
          className="menu"
        >
          <div className="menu-container">
            <NavLink className="menu-links" to="/">
              Home
            </NavLink>
            <NavLink className="menu-links" to="/services">
              Services
            </NavLink>
            <NavLink className="menu-links" to="/reviews">
              Reviews
            </NavLink>
            <NavLink className="menu-links" to="/faq">
              FAQ
            </NavLink>
          </div>
        </Drawer>
      </>
    );
  }
}

export default Navbar;
