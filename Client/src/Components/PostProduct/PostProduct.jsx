import React, { useState } from "react";
import NavBarComponent from "../NavBar";
import steps1 from "./steps.jsx";
import BoxSteps from "./BoxSteps";
import ImgLarge from "./ImgLarge";
import ImgSmalls from "./ImgSmalls";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from '@mui/material/Rating';
import "./PostProduct.css";

export default function PostProduct() {
  const [loading, setLoading] = useState(false);
  const [imgGrande, setImgGrande] = useState("");
  const [favorite, setfavorite] = React.useState(false);
  const [state, setState] = useState({
    productoname: "",
    price: "",
    description: "",
    shortDescription: "",
    img: [],
    stock: "",
    companyId: "63def89a96e705cd69d05ff3",
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
        <NavBarComponent />
        <BoxSteps steps={steps} />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="contenedor-postproduct-producto">
            <div style={{ width: "max-content", display: "flex" }}>
              <div className="contenedor-fotos-postproduct">
                {<ImgLarge imgGrande={imgGrande} />}
                <div className="aspect-ratio-1-1-sub-content">
                  <ImgSmalls
                    stateimg={state.img}
                    imgGrande={imgGrande}
                    setImgGrande={setImgGrande}
                  />
                </div>
              </div>
              <div className="contenedor-derecha-postproduct">
                {/* aqui */}
                <div style={{ position: "absolute", width: "max-content" ,zIndex:'2',right:'50px',top:'-10px'}}>
            <TurnedInIcon
              sx={{
                width: "55px",
                height: "55px",
                position: "absolute",
                top: "-10px",
                color: "#003A00",
              }}
            ></TurnedInIcon>
            <FavoriteIcon
              onClick={() => {
                favorite
                  ? setfavorite(false)
                  : setfavorite(true);
              }}
              sx={[
                {
                  position: "absolute",
                  width: "35px",
                  height: "25px",
                  left: "10px",
                  top: "0px",
                },
                favorite
                  ? { color: "#00F106" }
                  : { color: "white" },
              ]}
            ></FavoriteIcon>
          </div>
                {/* aqui */}
            <h3 className="titulo-postproduct">
              {" "}
              {state.productoname.length < 1
                ? "TITULO DEL PRODUCTO"
                : state.productoname}
            </h3>
                <h4 style={{overflowWrap:'break-word'}}>
                  {" "}
                  {state.price.length < 1
                    ? "$ PRECIO"
                    : "$"+ new Intl.NumberFormat( { style: 'currency', currency: 'ARS' }).format(state.price)}
                </h4>
                <h6  style={{overflowWrap:'break-word'}}>
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
                  </div>
            <div className="rating-completa-post-product">
      <Rating name="half-rating" style={{fontSize:'60px'}} defaultValue={3} precision={0.5} readOnly />
            </div>
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
