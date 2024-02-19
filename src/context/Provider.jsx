import React, { useState } from "react";
import { Context } from "./Context";

function Provider({ children }) {
  const [palabra, setPalabra] = useState("");
  return (
    <Context.Provider value={{ palabra, setPalabra }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
