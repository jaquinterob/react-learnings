import React from "react";
import {types} from "../reducer/types"; 

function Producto({ producto, dispatch }) {
  return (
    <div className="contenedor-producto">
      <div>
        {producto.nombre} <span>({producto.unidades} unidades)</span>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: types.aumentarUnidadPorId, id: producto.id })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch({
              type: types.disminuirUnidadPorId,
              id: producto.id,
            })
          }
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: types.quitar, id: producto.id })}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Producto;
