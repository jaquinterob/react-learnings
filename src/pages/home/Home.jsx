import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import King from "../King";
import "./home.css";
import Nav from "../../components/Nav";

function Home() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/king/:kingName" element={<King />} />
        <Route path="/king/leovigildo" element={<Navigate to= "/king/leogivildo" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
