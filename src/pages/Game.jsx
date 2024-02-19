import { useContext, useEffect, useState } from "react";
import { PALABROS } from "./../data/palabros";
import {
  seleccionarPalabroRandom,
  getAbecedarioArray,
} from "./../utils/palabros-utils";
import Palabra from "./components/Palabra";
import Pregunta from "./components/Pregunta";
import BotonLetra from "./components/BotonLetra";
import Horca from "./components/Horca";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

function Game() {
  const navegacion = useNavigate();
  const { palabra, setPalabra } = useContext(Context);
  const [pregunta, setPregunta] = useState("");
  const [palabraArray, setPalabraArray] = useState([]);
  const [letrasEncontradas, setLetrasEncontradas] = useState([]);
  const [fallos, setFallos] = useState(0);
  const abecedarioArray = getAbecedarioArray();
  useEffect(() => {
    const palabroSeleccionado = seleccionarPalabroRandom(PALABROS);
    setPalabra(palabroSeleccionado.palabro);
    setPregunta(palabroSeleccionado.pregunta);
  }, []);
  useEffect(() => {
    setPalabraArray(palabra.split(""));
  }, [palabra]);
  useEffect(() => {
    if (fallos === 6) {
      setTimeout(() => {
        navegacion("/pierde");
      }, 1000);
    }
  }, [fallos]);
  useEffect(() => {
    let contador = 0;
    for (const letraPalabra of palabraArray) {
      for (const letraEncontrada of letrasEncontradas) {
        if (letraPalabra === letraEncontrada) {
          contador++;
        }
      }
    }
    if (contador > 0 && contador === palabraArray.length) {
      navegacion("/gana");
    }
  }, [letrasEncontradas]);
  return (
    <>
      <div className="pregunta-container">
        {<Pregunta pregunta={pregunta} />}
      </div>
      <div className="palabra-container">
        {palabraArray.map((letra, i) => (
          <Palabra
            key={i}
            letra={
              letrasEncontradas.some(
                (letraEncontrada) => letra === letraEncontrada
              )
                ? letra
                : ""
            }
            letrasEncontradas={letrasEncontradas}
          />
        ))}
      </div>
      <div className="botones-container">
        {abecedarioArray.map((letra, i) => (
          <BotonLetra
            key={i}
            letra={letra}
            palabraArray={palabraArray}
            setLetrasEncontradas={setLetrasEncontradas}
            setFallos={setFallos}
          />
        ))}
      </div>
      <div className="horca-container">
        {fallos > 0 && <Horca fallos={fallos} />}
      </div>
      <pre>fallos: {fallos}</pre>
      <pre>{JSON.stringify(letrasEncontradas, null, 2)}</pre>
    </>
  );
}
export default Game;
