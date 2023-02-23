import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Detalle from "./Components/Detalle/Detalle";
// import Home from "./Components/Home/Home";
// import Login from "./Components/Login/Login";
// import PostProduct from "./Components/PostProduct/PostProduct";
// import Register from "./Components/Register/Register";
// import PanelUser from "./Components/PanelUser/PanelUser";
const PanelUser=lazy(()=>import('./Components/PanelUser/PanelUser'))
const Register=lazy(()=>import('./Components/Register/Register'))
const Login=lazy(()=>import('./Components/Login/Login'))
const Home=lazy(()=>import('./Components/Home/Home'))
const Detalle =lazy(()=>import('./Components/Detalle/Detalle'))
const PostProduct =lazy(()=>import('./Components/PostProduct/PostProduct'))

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>      
      <Routes>
        <Route path="*" element={<Navigate replace to ='/'/>} />
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producto/:idproducto" element={<Detalle />} />
        <Route path="/panel/user" element={<PanelUser />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
