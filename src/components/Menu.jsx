import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const kings = [
    "atanagildo",
    "ervigio",
    "leogivildo",
    "recesvinto",
    "sisebuto",
  ];
  return (
    <div className="menu-container">
      {kings.map((king) => (
        <NavLink to={"/king/" + king}>
          <img src={"http://www.html6.es/img/" + king + ".png"} alt="" />
        </NavLink>
      ))}
    </div>
  );
}

export default Menu;
