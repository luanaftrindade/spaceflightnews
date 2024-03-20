import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const navItems = [
    { label: "News", link: "/news", className: "navNews" },
    { label: "Blogs", link: "/blogs", className: "navBlogs" },
    { label: "Articles", link: "/articles", className: "navArticles" },
  ];

  //to get the current pathname using useLocation
  const { pathname } = useLocation();

  return (
    <div className="navBar">
      {navItems.map((item) => (
        <div key={item.label} className={item.className}>
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
