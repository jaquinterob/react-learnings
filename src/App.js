import "./App.css";
import "./miCss.css";
import imageSisebuto from "./images/reyes/rey_sisebuto.png";
import imageLeogivildo from "./images/reyes/rey_leogivildo.png";
import imageAtanagildo from "./images/reyes/rey_atanagildo.png";

function App() {
  const kings = [
    { name: "Sisebuto", image: imageSisebuto },
    { name: "Leogivildo", image: imageLeogivildo },
    { name: "Atanagildo", image: imageAtanagildo },
  ];
  return (
    <div className="container">
      {kings.map((king) => {
        return (
          <div className="card">
            <img src={king.image} alt="" />
            <div>{king.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
