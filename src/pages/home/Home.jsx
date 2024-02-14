import { useReducer, useRef, useState } from "react";
import Producto from "../../components/Producto";
import { reducer } from "./../../reducer/reducer";
import { types } from "../../reducer/types";
import "./home.css";

const valorInicial = [{ id: 1, nombre: "agua", unidades: 3 }];

function Home() {
  const nombreRef = useRef();
  const [productos, dispatch] = useReducer(reducer, valorInicial);
  const [nombreProducto, setNombreProducto] = useState("");
  const agregarProducto = () => {
    if (nombreProducto !== "") {
      dispatch({
        type: types.agregarProducto,
        producto: { nombre: nombreProducto },
      });
      setNombreProducto("");
    }
    nombreRef.current.focus();
  };
  return (
    <>
      <label htmlFor="producto">Producto: </label>
      <input
        ref={nombreRef}
        type="text"
        id="producto"
        value={nombreProducto}
        onChange={(e) => setNombreProducto(e.target.value)}
      />
      <button onClick={() => agregarProducto()}>Añadir</button>
      {productos.length === 0 ? (
        <div className="no-productos">No hay productos</div>
      ) : (
        productos.map((producto) => (
          <Producto key={producto.id} producto={producto} dispatch={dispatch} />
        ))
      )}
    </>
  );
}

export default Home;
