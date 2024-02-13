import React from "react";
import { useParams } from "react-router-dom";

function King() {
  const { kingName } = useParams();
  return (
    <div className="king-container">
      <img src={"http://www.html6.es/img/" + kingName + ".png"} alt="King" />
      <div className="king-name">
        {kingName.substring(0, 1).toLocaleUpperCase() + kingName.substring(1)}
      </div>
    </div>
  );
}

export default King;
