import { NavLink } from "react-router-dom";

function Nav() {
  const kings = [
    "atanagildo",
    "ervigio",
    "leogivildo",
    "recesvinto",
    "sisebuto",
  ];
  return (
    <div className="nav-container">
      {kings.map((king) => (
        <NavLink to={"/king/" + king}>
          {king.substring(0, 1).toUpperCase() + king.substring(1)}
        </NavLink>
      ))}
    </div>
  );
}

export default Nav;
