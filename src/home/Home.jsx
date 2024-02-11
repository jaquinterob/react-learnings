import React from "react";
import Top from "./components/Top";
import Menu from "./components/Menu";
import Outlet from "./components/Outlet";
import Controls from "./components/Controls";
import { Datos, Contexto } from "./../context/Context";

function Home() {
  return (
    <Datos>
      <div className="container">
        <div className="top">
          <Top />
        </div>
        <div className="main">
          <div className="menu">
            <Menu />
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="controls">
        <Controls />
      </div>
    </Datos>
  );
}

export default Home;
