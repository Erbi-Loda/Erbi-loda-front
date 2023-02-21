import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detalle from "./Components/Detalle/Detalle";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producto/:idproducto" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
