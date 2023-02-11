import React, { useState } from "react";
import NavBarComponent from "../NavBar";
import steps1 from "./steps.jsx";
import BoxSteps from "./BoxSteps";
import ImgLarge from "./ImgLarge";
import ImgSmalls from "./ImgSmalls";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="contenedor-postproduct-producto">
            <h3 className="titulo-postproduct">
              {" "}
              {state.productoname.length < 1
                ? "TITULO DEL PRODUCTO"
                : state.productoname}
            </h3>
            <div style={{ width: "max-content", display: "flex" }}>
              <div>
                {<ImgLarge imgGrande={imgGrande} />}
                <div className="aspect-ratio-1-1-sub-content">
                  <ImgSmalls
                    stateimg={state.img}
                    imgGrande={imgGrande}
                    setImgGrande={setImgGrande}
                  />
                </div>
              </div>
              <div>
                <h4>
                  {" "}
                  {state.price.length < 1
                    ? "$ PRECIO"
                    : "$ " + state.price}{" "}
                </h4>
                <h6>
                  {" "}
                  {state.shortDescription.length < 1
                    ? "DESCRIPCION CORTA DEL PRODUCTO (100 CARACTERES)"
                    : state.shortDescription}
                </h6>
                <h6>
                  {state.stock.length < 1 ? "STOCK:" : "Stock: " + state.stock}
                </h6>
                <div className="buttons-postproduct-contenedor">
                  <div className="contenedor-boton-postproduct">
                    {/* <button> <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon> COMPRAR</button> */}
                    <button>
                      <span>
                        {" "}
                        <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>{" "}
                        COMPRAR
                      </span>
                    </button>
                    <button>
                      <span>
                        {" "}
                        <AddShoppingCartIcon></AddShoppingCartIcon> {" "}Agregar al carrito
                      </span>
                    </button>
                    <button>
                      <span>
                        {" "}
                        <FavoriteBorderIcon></FavoriteBorderIcon> {" "}Favorito
                      </span>
                    </button>
                    {/* <button> <AddShoppingCartIcon></AddShoppingCartIcon> Agregar al carrito</button>
                <button> <FavoriteBorderIcon></FavoriteBorderIcon> Favorito</button> */}
                  </div>
                  {/* <Button
                  variant="outlined"
                  style={{
                    color: "black",
                    fontweight: "600",
                    borderColor: "#009007",
                    background:'radial-gradient(circle, #00f106, #00f106, #00f106, #00f106, #00f106, #00e007, #00cf08, #00bf08, #009b08, #007906, #005904, #003a00)'
                  }}
                >
                  <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon> COMPRAR
                </Button> */}
                  {/* <Button
                  variant="outlined"
                  style={{
                    color: "black",
                    fontweight: "600",
                    borderColor: "#00033a",
                    background:'radial-gradient(circle, #2ad1ff, #2ad1ff, #2ad1ff, #2ad1ff, #2ad1ff, #1bbef1, #0cace2, #009ad2, #0072ae, #004c88, #002961, #00033a)'
                  }}
                >
                  <AddShoppingCartIcon></AddShoppingCartIcon> Agregar al carrito
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    color: "black",
                    fontweight: "600",
                    borderColor: "#3a0000",
                    background:'radial-gradient(circle, #ff2a2a, #ff2a2a, #ff2a2a, #ff2a2a, #ff2a2a, #ed2429, #dc1e27, #ca1825, #a40d1f, #7f0519, #5b0110, #3a0000)'
                  }}
                >
                  <FavoriteBorderIcon></FavoriteBorderIcon> Favorito
                </Button>                   */}
                </div>
              </div>
            </div>
            <h6 className="descripcion-completa-post-product">
              {" "}
              {state.description.length < 1
                ? "DESCRIPCION LARGA DEL PRODUCTO"
                : state.description}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
