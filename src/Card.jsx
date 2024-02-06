import React from "react";

export default function Card({ rey }) {
  const deleteKing = (e) => {
    e.target.parentNode.parentNode.remove();
  };

  const vote = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  };
  return (
    <div className="card">
      <div>{rey.nombre}</div>
      <div className="vote" onClick={vote}>
        0
      </div>
    </div>
  );
}
