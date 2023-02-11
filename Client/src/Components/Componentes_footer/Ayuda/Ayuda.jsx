import NavBarComponent from "../../NavBar";
import "./Ayuda.style.css"


export default function Ayuda() {
  return (
    <div>
      <NavBarComponent />\
      <div className="containerAyuda">
        <h2>¿En que podemos ayudarte?</h2>
        <div className="Temarios">
          <div className="button-menu">button compra</div>
          <div className="button-menu">button venta</div>
        </div>
      </div>
    </div>
  );
}
