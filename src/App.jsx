import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Provider from "./context/Provider";
import { Pierde } from "./pages/Pierde";
import { Gana } from "./pages/Gana";
export const App = () => {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/pierde" element={<Pierde />}></Route>
        <Route path="/gana" element={<Gana />}></Route>
      </Routes>
    </Provider>
  );
};
