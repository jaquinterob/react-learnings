import "./App.css";
import "./miCss.css";
import imageSisebuto from "./images/reyes/rey_sisebuto.png";
import imageLeogivildo from "./images/reyes/rey_leogivildo.png";
import imageAtanagildo from "./images/reyes/rey_atanagildo.png";
import imageIncognito from "./images/reyes/rey_incognito.png";

function App() {
  const kings = [
    { name: "Sisebuto", image: imageSisebuto },
    { name: "Leogivildo", image: imageLeogivildo },
    { name: "Atanagildo", image: imageAtanagildo },
  ];

  const clickOnImg = (e) => {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden"
    } else {
      e.target.src = imageIncognito;
      e.target.parentNode.style.backgroundColor = "transparent";
    }
  };

  const clickOnKingsName = (e) => {
    if (e.target.innerHTML === "visto") {
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "visto";
    }
  };

  return (
    <div className="container">
      {kings.map((king) => {
        return (
          <div key={king.name} className="card">
            <img src={king.image} alt="" onClick={clickOnImg} />
            <div onClick={clickOnKingsName}>{king.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
