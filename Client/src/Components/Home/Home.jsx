import NavBarComponent2 from "../Navbar/Navbar2.jsx";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import {useProductsStore} from '../../store/productosStore';
// estilos
import './Home.style.css'
import CarouselBoostrap from "./Carousel-Boostrap/Carousel";
import toast, { Toaster } from 'react-hot-toast';
import CartaCargando from "../Card/CartaCargando.jsx";
import io from "socket.io-client";

const socket = io("http://localhost:8080/");

export default function Home() {
  const {AgregarAlCarrito,getProductsRandom,getProducts,favorite,DetalleProduct,getfavorite,putFavorite,productsPopulate,productsRandom,getProductsPopulate}= useProductsStore()
  
 useEffect(()=>{
  getProducts()
  getfavorite()
  getProductsRandom()
 },[])
  const [toShow,setToShow] = useState([
    // {
    //   title:"Diapositiva 1",
    //   img:"https://www.sabervivirtv.com/medio/2022/06/09/6-beneficios-del-cafe-para-tu-salud-que-quiza-no-conozcas_532ab4fd_1280x720.jpg",
    //   description:"Esta es la descripcion del elemento 1",
    // },
    {
      title:"Diapositiva 2",
      img:"https://www.hogarmania.com/archivos/201301/cafe-formas-de-preparar-xl-668x400x80xX.jpg",
      description:"Esta es la descripcion del elemento 2",
    },
    // {
    //   title:"Diapositiva 3",
    //   img:"https://ichef.bbci.co.uk/news/640/cpsprodpb/76B0/production/_105848303_gettyimages-996540050.jpg",
    //   description:"Esta es la descripcion del elemento 3",
    // }
  ])
  const [historial,setHistorial]=useState(false)
  const pedirHistorial=async()=>{
    const options = { method: "GET",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization':'Bearer '+localStorage.getItem('userloda')
    } };
    await fetch("https://erbi-loda-back.vercel.app/gethistorialuser", options)
      .then((response) => response.json())
      .then((response) => {response.historial.length>0&&setHistorial(response.historial)})
      .catch((err) => setHistorial("error"));
  }
useEffect(()=>{
  if(localStorage.getItem('userloda'))pedirHistorial()
  getProductsPopulate()
},[])
const notify = () =>{console.log(3); toast('Here is your toast.')};
  return (
    <div className="containerHome">
      <NavBarComponent2/>
      <CarouselBoostrap></CarouselBoostrap>
      <div className="container-container-cards">

        <div className="container-cards">
      {historial&&historial !=="error"?historial.map((product,index)=>{
        return(
          <div key={product._id}>
            {index===0&&<h4 className="titulo-cards">Historial:</h4>}
          <Card DetalleProduct={DetalleProduct}agregarAlCarrito={AgregarAlCarrito} key={product._id}favorite2={favorite}favorite={favorite?favorite.some(e=>e===product._id):false} putFavorite={putFavorite}  id={product._id} name={product.productoname} shDesc={product.shortDescription} price={product.price}img={product.img[0]} />
          </div>
          )
        })
        :
        historial === "error" ?
        null
        :
        [1,2,3,4,5].map((e,index)=>{
         return (         
          <div key={e}>
          {index===0&&<h4 className="titulo-cards">Historial:</h4>}
         <CartaCargando/>
         </div>
         )
        })
      }
        </div>
        <div className="container-cards">
      {productsPopulate&&productsPopulate!=="error"?productsPopulate.map((product,index)=>{
        return(
          <div key={product._id}>
          {index===0&&<h4 className="titulo-cards">Populares:</h4>}
          <Card DetalleProduct={DetalleProduct}agregarAlCarrito={AgregarAlCarrito} key={product._id}favorite2={favorite}favorite={favorite?favorite.some(e=>e===product._id):false} putFavorite={putFavorite}  id={product._id} name={product.productoname} shDesc={product.shortDescription} price={product.price}img={product.img[0]} />
          </div>
          )
        })
        :
        productsPopulate === "error" ?
        null
        :
        [1,2,3,4,5].map((e,index)=>{
         return (         
          <div key={e}>
          {index===0&&<h4 className="titulo-cards">Populares:</h4>}
         <CartaCargando/>
         </div>
         )
        })
      }
        </div>
        <div className="container-cards">
      {productsRandom&&productsRandom!=="error"?productsRandom.map((product,index)=>{
        return(
          <div key={product._id}>
          {index===0&&<h4 className="titulo-cards">Random:</h4>}
          <Card DetalleProduct={DetalleProduct}agregarAlCarrito={AgregarAlCarrito} key={product._id}favorite2={favorite}favorite={favorite?favorite.some(e=>e===product._id):false} putFavorite={putFavorite}  id={product._id} name={product.productoname} shDesc={product.shortDescription} price={product.price}img={product.img[0]} />
          </div>
          )
        })
        :
        productsRandom === "error" ?
        null
        :
        [1,2,3,4,5].map((e,index)=>{
         return (         
          <div key={e}>
          {index===0&&<h4 className="titulo-cards">Random:</h4>}
         <CartaCargando/>
         </div>
         )
        })
        }
        </div>
        
      </div>
    </div>
  );
}
