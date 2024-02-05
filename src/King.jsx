import React, { useRef } from "react";
import "./king.css";

export default function King({ rey, setTotal }) {
  const kingRef = useRef();
  const buy = () => {
    setTotal((total) => total + rey.precio);
    kingRef.current.style.display = "none";
  };
  return (
    <div ref={kingRef} className="card" style={{ backgroundColor: rey.color }}>
      <div className="name">{rey.nombre}</div>
      <img
        src={
          `https://www.html6.es/img/rey_` + rey.nombre.toLowerCase() + `.png`
        }
        alt=""
      />
      <div>Precio:</div>
      <div>${rey.precio}</div>
      <button onClick={buy}>Comprar</button>
    </div>
  );
}
