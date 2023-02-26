import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarComponent2 from "../Navbar/Navbar2.jsx";
import ImgLarge from "../PostProduct/ImgLarge";
import ImgSmalls from "../PostProduct/ImgSmalls";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import {useProductsStore} from '../../store/productosStore';
import Loading2 from '../Loading2/Loading'
import "../PostProduct/PostProduct.css";

export default function Detalle() {
  const {
    favorite,
    getfavorite,
    putFavorite,
    DetalleProduct,
    ProductDetail,
    ProductDetailState
  } = useProductsStore();
  const { idproducto } = useParams();
  
 useEffect(()=>{
  getfavorite()
  if(ProductDetailState!==idproducto.toString() && ProductDetailState!=="Cargando"){DetalleProduct(idproducto)}
 },[])
  const [imgGrande, setImgGrande] = useState("");

  return (
    <>
    <NavBarComponent2></NavBarComponent2>
    {ProductDetailState===idproducto.toString()?
    <div style={{ width: "100%",minHeight:'calc(100vh - 80px)', display: "flex", justifyContent: "center" }}>
      <div className="contenedor-postproduct-producto">
        <div style={{display: "flex" }}>
          <div className="contenedor-fotos-postproduct">
            {ProductDetail && (
              <ImgLarge imgGrande={imgGrande ? imgGrande : ProductDetail.img[0]} />
            )}
            <div className="aspect-ratio-1-1-sub-content">
              {ProductDetail&&<ImgSmalls
                stateimg={ProductDetail.img}
                imgGrande={imgGrande}
                setImgGrande={setImgGrande}
              />}
            </div>
          </div>
          <div className="contenedor-derecha-postproduct">
            {/* aqui */}
            <div
              style={{
                position: "absolute",
                width: "max-content",
                zIndex: "2",
                right: "50px",
                top: "-10px",
              }}
            >
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
                  putFavorite(idproducto)
                }}
                sx={[
                  {
                    position: "absolute",
                    width: "35px",
                    height: "25px",
                    left: "10px",
                    top: "0px",
                  },
                  favorite.some(e=>e===idproducto)? { color: "#00F106" } : { color: "white" },
                ]}
              ></FavoriteIcon>
            </div>
            {/* aqui */}
            <h3 className="titulo-postproduct">
              {" "}
              {ProductDetail.productoname?.length < 1
                ? "TITULO DEL PRODUCTO"
                : ProductDetail.productoname}
            </h3>
            <h4 style={{ overflowWrap: "break-word" }}>
              {" "}
              {ProductDetail.price?.length < 1
                ? "$ PRECIO"
                : "$" +
                  new Intl.NumberFormat({
                    style: "currency",
                    currency: "ARS",
                  }).format(ProductDetail.price)}
            </h4>
            <h6 style={{ overflowWrap: "break-word" }}>
              {" "}
              {ProductDetail.shortDescription?.length < 1
                ? "DESCRIPCION CORTA DEL PRODUCTO (100 CARACTERES)"
                : ProductDetail.shortDescription}
            </h6>
            <h6>
              {ProductDetail.stock?.length < 1
                ? "STOCK:"
                : "Stock: " + ProductDetail.stock}
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
                    <AddShoppingCartIcon></AddShoppingCartIcon> Agregar al
                    carrito
                  </span>
                </button>
              </div>
              <div className="rating-completa-post-product">
                <Rating
                  name="half-rating"
                  style={{ fontSize: "60px" }}
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <h6 className="descripcion-completa-post-product">
          {" "}
          {ProductDetail.description?.length < 1
            ? "DESCRIPCION LARGA DEL PRODUCTO"
            : ProductDetail.description}
        </h6>
      </div>
    </div>:<Loading2></Loading2>}
    </>
  );
}
