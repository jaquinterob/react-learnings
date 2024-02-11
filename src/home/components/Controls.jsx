import React, { useContext } from "react";
import { Contexto } from "../../context/Context";

function Controls() {
  const { setColor } = useContext(Contexto);
  return (
    <div className="action-container">
      <div className="red" onClick={() => setColor("red")}></div>
      <div className="blue" onClick={() => setColor("blue")}></div>
      <div className="gold" onClick={() => setColor("gold")}></div>
      <div className="green" onClick={() => setColor("green")}></div>
    </div>
  );
}

export default Controls;
