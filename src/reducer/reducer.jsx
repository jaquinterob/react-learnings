import {types} from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case types.agregarProducto:
      const nextId = calculateNextId(state);
      return [
        ...state,
        { id: nextId, nombre: action.producto.nombre, unidades: 1 },
      ];
    case types.disminuirUnidadPorId:
      const productoAModificar = state.find(
        (producto) => producto.id === action.id
      );
      let nuevasUnidades = productoAModificar.unidades - 1;
      if (productoAModificar.unidades === 0) {
        nuevasUnidades = 0;
      }
      const productoModificado = {
        ...productoAModificar,
        unidades: nuevasUnidades,
      };
      return state.map((producto) => {
        return producto.id === action.id ? productoModificado : producto;
      });

    case types.aumentarUnidadPorId:
      const productoASumar = state.find(
        (producto) => producto.id === action.id
      );
      const productoSumado = {
        ...productoASumar,
        unidades: productoASumar.unidades + 1,
      };
      return state.map((producto) => {
        return producto.id === action.id ? productoSumado : producto;
      });
    case types.quitar:
      return state.filter((producto) => producto.id !== action.id);

    default:
      break;
  }
}

function calculateNextId(state) {
  return state.length === 0 ? 1 : state[state.length - 1].id + 1;
}
