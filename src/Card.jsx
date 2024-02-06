import React from "react";

export default function Card({ rey }) {
  const deleteKing = (e) => {
    e.target.parentNode.parentNode.remove()
  };
  return (
    <div className="card">
      <div>
        {rey.nombre} <button onClick={deleteKing}>Borrar</button>
      </div>
    </div>
  );
}
