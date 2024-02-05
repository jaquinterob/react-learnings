import { useState } from "react";
import "./App.css";
import "./miCss.css";
import King from "./King";

function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
    },
    {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
      imgUrl:'https://www.html6.es/img/rey_ervigio.png'
    },
    {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81,
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
    },
    {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
    },
    {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
    },
  ];

  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>Total a pagar: ${total}</h1>
      <section className="kings-container">
        {reyes.map((rey) => {
          return <King key={rey.nombre} rey={rey} setTotal={setTotal} />;
        })}
      </section>
    </>
  );
}

export default App;
