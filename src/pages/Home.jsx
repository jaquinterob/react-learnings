import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Palabro</h1>
      <button onClick={() => navigate("/game")}>Iniciar Juego</button>
    </>
  );
}

export default Home;
