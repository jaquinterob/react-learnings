import { useState } from "react";
import "./App.css";

const App = () => {
  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    },
    {
      moneda: "Peso argentino",
      cambio: 118.6,
    },
    {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    },
    {
      moneda: "Peso mexicano",
      cambio: 23.2,
    },
    {
      moneda: "Dólar",
      cambio: 1.14,
    },
  ];

  const [pesoArgentino, setPesoArgentino] = useState('');
  const [pesoColombiano, setPesoColombiano] = useState('');
  const [pesoMexicano, setPesoMexicano] = useState('');
  const [dolar, setDolar] = useState('');

  const calculate = (e) => {
    const value = e.target.value;
    setPesoArgentino(value * cambios[1].cambio);
    setPesoColombiano(value * cambios[2].cambio);
    setPesoMexicano(value * cambios[3].cambio);
    setDolar(value * cambios[4].cambio);
  };

  return (
    <>
      <div className="container">
        <label htmlFor={cambios[0].moneda}>{cambios[0].moneda}</label>
        <input id={cambios[0].moneda} type="number" onChange={calculate} />
      </div>
      <div className="container">
        <label htmlFor={cambios[1].moneda}>{cambios[1].moneda}</label>
        <input
          id={cambios[1].moneda}
          type="number"
          readOnly
          value={pesoArgentino}
        />
      </div>
      <div className="container">
        <label htmlFor={cambios[2].moneda}>{cambios[2].moneda}</label>
        <input
          id={cambios[2].moneda}
          type="number"
          readOnly
          value={pesoColombiano}
        />
      </div>
      <div className="container">
        <label htmlFor={cambios[3].moneda}>{cambios[3].moneda}</label>
        <input
          id={cambios[3].moneda}
          type="number"
          readOnly
          value={pesoMexicano}
        />
      </div>
      <div className="container">
        <label htmlFor={cambios[4].moneda}>{cambios[4].moneda}</label>
        <input id={cambios[4].moneda} type="number" readOnly value={dolar} />
      </div>
    </>
  );
};

export default App;
