import NavBarComponent from "../NavBar";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import './Home.style.css'
import Carrousel from "../Carrousel/Carrousel";
import {useProductsStore} from '../../store/productosStore';



export default function Home() {
  const {product,getProducts}= useProductsStore()
  
 useEffect(()=>{
  getProducts()
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

  return (
    <div className="containerHome">
      <NavBarComponent></NavBarComponent>
      <Carrousel toShow={toShow}></Carrousel>
      <div className="container-container-cards">
        <div className="container-cards">
      {product&&product.map((product,index)=>{
        return(
          <div key={product._id}>
          {index===0&&<h4 className="titulo-cards">Productos:</h4>}
          <Card key={product._id} id={product._id} name={product.productname} shDesc={product.shortDescription} price={product.price} img={product.img[0]}/>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}
