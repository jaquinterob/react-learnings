import { useState } from "react";
import "./App.css";

const App = () => {
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar",
    },
  ];

  let [message, setMessage] = useState("");
  let [counter, setCounter] = useState(0);

  const nextKing = () => {
    setCounter(counter + 1);
    if (counter + 1 >= reyesGodos.length) {
      setCounter(0);
    }
    setMessage(
      <div className="text">
        La aficion principal de{" "}
        <span className="rojo">{reyesGodos[counter].nombre}</span> es{" "}
        <span className="verde">{reyesGodos[counter].aficion}</span>
      </div>
    );
  };

  return (
    <>
      <button onClick={nextKing}>Ver siguiente</button>
      <h1>{counter}</h1>
      <h2>{message}</h2>
    </>
  );
};
export default App;
