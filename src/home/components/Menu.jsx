import React, { useContext } from "react";
import { Contexto } from "../../context/Context";

function Menu() {
  const { color } = useContext(Contexto);
  return <div style={{ backgroundColor: color }}>menu</div>;
}

export default Menu;
