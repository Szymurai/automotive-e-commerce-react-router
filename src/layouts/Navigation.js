import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import "../styles/Navigation.css";

const list = [
  { name: "katalog", path: "/", exact: true, active: "parts" },
  { name: "promocje", path: "/promotions", active: "promotions" },
  { name: "blog", path: "/blog", active: "blog" },
  { name: "kontakt", path: "/contact", active: "contact" },
  { name: "logowanie", path: "/admin", active: "admin" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact && item.exact}
        className={item.name}
        activeClassName={item.active === "promotions" ? item.active : "active"}
      >
        {item.name === "promocje" && (
          <FontAwesomeIcon className="icon" icon={solid("fire")} />
        )}
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
