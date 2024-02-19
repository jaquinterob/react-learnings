import React from "react";

function BotonLetra({ letra, palabraArray, setLetrasEncontradas, setFallos }) {
  const comprobarSiEstaEnLasLetrasDelPalabro = (e) => {
    if (esClickeable(e)) {
      const letraPresionada = e.target.innerText;
      if (palabraArray.some((letra) => letra === letraPresionada)) {
        setLetrasEncontradas((letrasEncontradas) => [
          ...letrasEncontradas,
          letraPresionada,
        ]);
        e.target.style.backgroundColor = "green";
      } else {
        setFallos((fallos) => fallos + 1);
        e.target.style.backgroundColor = "red";
      }
    }
  };
  return (
    <div className="boton-letra" onClick={comprobarSiEstaEnLasLetrasDelPalabro}>
      {letra}
    </div>
  );
}

const esClickeable = (e) =>
  e.target.style.backgroundColor !== "red" &&
  e.target.style.backgroundColor !== "green";

export default BotonLetra;
