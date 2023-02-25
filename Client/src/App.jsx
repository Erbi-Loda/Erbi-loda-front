import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const PanelUser=lazy(()=>import('./Components/PanelUser/PanelUser'))
const PanelCompany=lazy(()=>import('./Components/PanelCompany/PanelCompany'))
const Register=lazy(()=>import('./Components/Register/Register'))
const Login=lazy(()=>import('./Components/Login/Login'))
const Home=lazy(()=>import('./Components/Home/Home'))
const Detalle =lazy(()=>import('./Components/Detalle/Detalle'))
const PostProduct =lazy(()=>import('./Components/PostProduct/PostProduct'))
const Loading =lazy(()=>import('./Components/Loading2/Loading'))

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div className="loading"><Loading/></div>}>      
      <Routes>
        <Route path="*" element={<Navigate replace to ='/'/>} />
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producto/:idproducto" element={<Detalle />} />
        <Route path="/panel/user" element={<PanelUser />} />
        <Route path="/panel/company" element={<PanelCompany />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
