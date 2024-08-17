import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import "../styles/navBar.css";

function NavBar() {
  const navItems = [
    { label: "News", link: "/news", className: "navNews" },
    { label: "Blogs", link: "/blogs", className: "navBlogs" },
  ];

  // To get the current pathname using useLocation
  const { pathname } = useLocation();
  const {theme} = useContext(ThemeContext);

  return (
    <nav className={`navBar ${theme}`}>
      {navItems.map((item) => (
        <div key={item.label} className="navItem">
          {" "}
          <Link
            to={item.link}
            className={pathname === item.link ? "active" : ""}
          >
            {item.label}
          </Link>
        </div>
      ))}
   </nav>
  );
}

export default NavBar;
