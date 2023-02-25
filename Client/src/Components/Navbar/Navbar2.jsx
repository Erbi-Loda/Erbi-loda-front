import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import BurguerButton from "./BurguerButton";
import { useState } from "react";
import ButtonLoda from "../ButtonLoda/ButtonLoda";
import loginsvg from '../../imgs/svg/loginsvg.svg'
import registersvg from '../../imgs/svg/registersvg.svg'
import profilesvg from '../../imgs/svg/profilesvg.svg'
import miscomprassvg from '../../imgs/svg/miscomprassvg.svg'
import carritosvg from '../../imgs/svg/carritosvg.svg'
import './buscador.css'
function Buscador(){
    return(
        <div className="group">
  <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
  <input placeholder="Search" type="search" className="input"/>
</div>
    )
}
export default function Navbar() {
  const [estado, setestado] = useState(false);
  const cambiarestado = () => {
    setestado(!estado);
  };
  return (
    <>
    <div style={{height:'55px'}}>

    </div>
    <div style={{overflow:'hidden',position:'fixed',width:'100%',zIndex:10000,top:'0'}}>
    <nav className="NavContainer">
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
        }}
        to={"/"}
      >
        <h2 style={{margin:'0'}}>
          <img
            src={logo}
            style={{ width: "40px", height: "40px", marginRight: "1rem" }}
            alt=""
          />
          Erbi Loda
        </h2>
      </Link>
      <div className="noburguer">

      <Buscador></Buscador>
      </div>
      {/* burger */}
      <div onClick={cambiarestado} className="burguer">
        <BurguerButton
          estado={estado}
          cambiarestado={cambiarestado}
          ></BurguerButton>
      </div>
      <div className="noburguer">
        {localStorage.getItem("userloda")?
        <>
<ButtonLoda  fs={18} text={"Perfil"} type={"small"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={profilesvg}/>}/>
<ButtonLoda  fs={18} text={"Mis compras"} type={"small"} icon={<img width={"20px"} style={{filter:'invert(75%)'}} src={miscomprassvg}/>}/>        
        </>
        :
        <>
<ButtonLoda  fs={18} text={"Ingresá"} type={"small"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={loginsvg}/>}/>
<ButtonLoda  fs={18} text={"Creá tu cuenta"} type={"small"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={registersvg}/>}/>
        </>
}
<ButtonLoda  fs={18} text={""} type={"small"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={carritosvg}/>}/>
      </div>
          {/* burger */}
    </nav>
        <div className={estado?"burguerEffect":"burguerEffectNoactive"}>
            <div>

        <Buscador></Buscador>
            </div>
            {localStorage.getItem("userloda")?
        <>
<ButtonLoda  fs={18} text={"Perfil"} type={"normal"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={profilesvg}/>}/>
<ButtonLoda  fs={18} text={"Mis compras"} type={"normal"} icon={<img width={"20px"} style={{filter:'invert(75%)'}} src={miscomprassvg}/>}/>        
        </>
        :
        <>
<ButtonLoda  fs={18} text={"Ingresá"} type={"normal"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={loginsvg}/>}/>
<ButtonLoda  fs={18} text={"Creá tu cuenta"} type={"normal"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={registersvg}/>}/>
        </>
}
<ButtonLoda  fs={18} text={""} type={"normal"} icon={<img width={"27px"} style={{filter:'invert(75%)'}} src={carritosvg}/>}/>
        </div>
        </div>
        </>
  );
}
