import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navBar.css";

function NavBar() {
  const navItems = [
    { label: "News", link: "/news", className: "navNews" },
    { label: "Blogs", link: "/blogs", className: "navBlogs" },
    { label: "Articles", link: "/articles", className: "navArticles" },
  ];

  // To get the current pathname using useLocation
  const { pathname } = useLocation();

  return (
    <div className="navBar">
      {navItems.map((item) => (
        <div key={item.label} className="navItem"> {/* Changed className to "navItem" */}
          <Link
            to={item.link}
            className={pathname === item.link ? "active" : ""} 
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavBar;
