import React, { useContext } from "react";
import { Contexto } from "../../context/Context";

function Top() {
  const { color } = useContext(Contexto);
  return <div style={{ backgroundColor: color }}>top</div>;
}

export default Top;
