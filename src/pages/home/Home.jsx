import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import King from "../King";
import "./home.css";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";

function Home() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/king/:kingName" element={<King />} />
        <Route path="/" element={<Menu />} />
        <Route
          path="/king/leovigildo"
          element={<Navigate to="/king/leogivildo" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
