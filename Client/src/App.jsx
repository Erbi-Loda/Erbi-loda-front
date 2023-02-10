import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcercaDe from "./Components/Componentes_footer/AcercaDe/AcercaDe";
import Ayuda from "./Components/Componentes_footer/Ayuda/Ayuda";
import MiCuenta from "./Components/Componentes_footer/MiCuenta/MiCuenta";
import RedesSociales from "./Components/Componentes_footer/RedesSociales/RedesSociales";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PostProduct from "./Components/PostProduct/PostProduct";
import Register from "./Components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/post" element={<PostProduct />} /> 
         <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/infoAyuda" element={<Ayuda/>} />
        <Route path="/acercaDe" element={<AcercaDe/>} />
        <Route path="/redesSociales" element={<RedesSociales/>} />
        <Route path="/miCuenta" element={<MiCuenta/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
