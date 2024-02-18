import { useEffect, useState } from "react";
import { PALABROS } from "./../data/palabros";
import { seleccionarPalabroRandom } from "./../utils/palabros-utils";
import Palabra from "./components/Palabra";

function Game() {
  const [palabra, setPalabra] = useState("");
  let [palabraArray, setPalabraArray] = useState([]);
  useEffect(() => {
    setPalabra(seleccionarPalabroRandom(PALABROS).palabro);
  }, []);
  useEffect(() => {
    setPalabraArray(palabra.split(""));
  }, [palabra]);
  return (
    <div className="palabra-container">
      {palabraArray.map((letra) => (
        <Palabra letra={letra} />
      ))}
    </div>
  );
}

export default Game;
