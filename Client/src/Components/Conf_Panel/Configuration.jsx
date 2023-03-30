import { useEffect, useState } from "react";
import "./Configuration.style.css";

export default function Conf_Panel() {
  const [muestra, setMuestra] = useState("Tema");

  useEffect(()=>{
    // alert(muestra)
  },[muestra])

  return (
    <div className="box-setting">
      <ul className="settings">
        <li><button className="button-setting" onClick={(e)=>{setMuestra("Name")}}>Modificar nombre</button></li>
        <li><button className="button-setting" onClick={(e)=>{setMuestra("Pass")}}>Modificar contraseña</button></li>
        <li><button className="button-setting" onClick={(e)=>{setMuestra("Mail")}}>Modificar correo</button></li>
        <li><button className="button-setting" onClick={(e)=>{setMuestra("Tema")}}>Modificar Tema</button></li> {/* Dark/Original */}
      </ul>
      <section className="show-setting">
        {/* aqui van a ir los componentes que debemos mostrar al usuario. */}
        {muestra=="Name"?<h1>Hola Usuario, quieres cambiar tu nombre?</h1>:""}
      </section>
    </div>
  );
}
