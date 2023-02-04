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
    companyId: "63d6e7843175bd63792f32ab",
  });

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
        <NavBarComponent/>
        <BoxSteps steps={steps} />
        <div style={{ width: "100%", flexGrow: 1, justifyContent: "center" }}>
          {imgGrande && <ImgLarge imgGrande={imgGrande} />}
          <div className="aspect-ratio-1-1-sub-content">
            <ImgSmalls stateimg={state.img} imgGrande={imgGrande} setImgGrande={setImgGrande}/>            
          </div>
        </div>
      </div>
    </div>
  );
}
