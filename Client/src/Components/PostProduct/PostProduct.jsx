import React, { useState } from "react";
import NavBarComponent from "../NavBar";
import steps1 from "./steps.jsx";
import BoxSteps from "./BoxSteps";
import ImgLarge from "./ImgLarge";
import ImgSmalls from "./ImgSmalls";
import "./PostProduct.css";

export default function PostProduct() {
  const [loading, setLoading] = useState(false);
  const [imgGrande, setImgGrande] = useState("");
  const [state, setState] = useState({
    productoname: "",
    price: "",
    description: "",
    shortDescription: "",
    img: [],
    stock: "",
    companyId: "63def89a96e705cd69d05ff3",
  });
  //
  const steps = steps1({
    state,
    setState,
    loading,
    setLoading,
    setImgGrande,
    imgGrande,
  });
  return (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <div>
        <NavBarComponent />
        <BoxSteps steps={steps} />
        <div style={{ width: "100%", display:'flex', justifyContent: "center" }}>
          <div style={{width:'max-content',display:'flex'}}>
            <div>
              {imgGrande && <ImgLarge imgGrande={imgGrande} />}
              <div className="aspect-ratio-1-1-sub-content">
                <ImgSmalls
                  stateimg={state.img}
                  imgGrande={imgGrande}
                  setImgGrande={setImgGrande}
                />
              </div>
            </div>
            <div>
              <h3> {state.productoname.length<1?'TITULO DEL PRODUCTO':state.productoname}</h3>
              <h4> {state.price.length<1?'$ PRECIO':state.price} </h4>
              <h6> {state.shortDescription.length<1?'DESCRIPCION CORTA DEL PRODUCTO (100 CARACTERES)':state.shortDescription}</h6>
              <h6>{state.stock.length<1?'STOCK:':state.stock}</h6>
              <button>COMPRAR</button>
              <button>favorito</button>
              <button>agregar al carrito</button>
            </div>
          </div>
        </div>
            <h6> {state.description.length<1?'DESCRIPCION LARGA DEL PRODUCTO':state.description}</h6>
      </div>
    </div>
  );
}
