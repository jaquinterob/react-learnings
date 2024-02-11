import React, { createContext, useState } from "react";

export const Contexto = createContext();

export function Datos({ children }) {
  const [color, setColor] = useState("white");
  return (
    <Contexto.Provider value={{ color, setColor }}>
      {children}
    </Contexto.Provider>
  );
}
