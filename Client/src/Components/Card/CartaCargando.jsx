import "./Card.style.css";

export default function CartaCargando(i) {
console.log(i)
  return (
    <div className="contenedor-cargando-cartas">
        <div className="img-cargando-cartas"/>
        <div className="precio-cargando-cartas"/>
        <div className="contenedor-boton-cargando-cartas">
        <div className="boton-cargando-cartas"/>
        <div className="boton-cargando-cartas"/>
        </div>
    </div>
  )
}
