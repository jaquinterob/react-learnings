import "./App.css";
import Card from "./Card";
import "./miCss.css";

function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 40,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];

  return (
    <>
      <h2>Actividad 4:</h2>
      <div className="container">
        {reyes
          .filter((king) => king.vacasComidas > 10 && king.reinado > 10)
          .map((rey) => {
            return <Card key={rey.nombre} rey={rey} />;
          })}
      </div>
    </>
  );
}

export default App;
