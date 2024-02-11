import React, { useContext } from "react";
import { Contexto } from "../context/Context";

function Outlet() {
  const { color } = useContext(Contexto);
  return <div style={{ backgroundColor: color }}>outlet</div>;
}

export default Outlet;
