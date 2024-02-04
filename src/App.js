import "./App.css";
import "./miCss.css";
import { useRef } from "react";
import image0 from "./images/rey_atanagildo.png";
import image1 from "./images/rey_teodorico.png";

function App() {
  const cambio = 23.16;
  const refCaja = useRef();

  const incrementar = (e) => {
    if (Number(e.target.innerHTML) + 1 > 7) {
      e.target.style.backgroundColor = "red";
      if (Number(e.target.innerHTML) + 1 === 10) {
        e.target.innerHTML = 1;
        e.target.style.backgroundColor = "transparent";
      } else {
        add(e);
      }
    } else {
      add(e);
    }
  };

  const add = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  };

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };

  const cambiarImg = (e) => {
    console.log(e.target.src);
    if (e.target.src.includes("atanagildo")) {
      e.target.src = image1;
    } else {
      e.target.src = image0;
    }
  };

  const escribirEnLabel = (e) => {
    refCaja.current.innerHTML = e.target.value;
  };

  return (
    <>
      <div ref={refCaja} onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img src={image0} onClick={cambiarImg} />
      </div>
      <input type="text" onChange={escribirEnLabel} />
    </>
  );
}

export default App;
