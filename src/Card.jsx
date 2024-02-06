import React from "react";

export default function Card({ rey }) {
  return (
    <div className="card">
      <div className="text">
        <span className="red">{rey.nombre.toUpperCase()}</span> ha comido {rey.vacasComidas}{" "}
        vacas en sus {rey.reinado} años de reinado
      </div>
      <img
        src={
          "https://www.html6.es/img/rey_" + rey.nombre.toLowerCase() + ".png"
        }
        alt=""
      />
    </div>
  );
}
