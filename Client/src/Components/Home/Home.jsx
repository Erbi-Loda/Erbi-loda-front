import NavBarComponent from "../NavBar";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import './Home.style.css'
import Carrousel from "../Carrousel/Carrousel";
import Loading from "../Loading2/Loading";

export default function Home() {
//   const [productos,setProductos]=useState([
//     {
//       "_id": "63defe0596e705cd69d05ff22",
//       "productname": "te",
//       "price": "20",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//       "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//       "img": [
//           "https://okdiario.com/img/recetas/2016/10/26/beneficios-del-te-de-limon.jpg"
//       ],
//       "views": "0",
//       "coments": [],
//       "score": [],
//       "state": "sale",
//       "stock": "33",
//       "favorite": [],
//       "companyId": "63def89a96e705cd69d05ff3",
//       "__v": 0
//   },{
//     "_id": "63defe0596e705cd69d05ff63",
//     "productname": "Cafe",
//     "price": "1400",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//     "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//     "img": [
//         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
//     ],
//     "views": "0",
//     "coments": [],
//     "score": [],
//     "state": "sale",
//     "stock": "33",
//     "favorite": [],
//     "companyId": "63def89a96e705cd69d05ff3",
//     "__v": 0
// },{
//   "_id": "63defe0596e705cd69d05ff64",
//   "productname": "Cafe",
//   "price": "1400",
//   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//   "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//   "img": [
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
//   ],
//   "views": "0",
//   "coments": [],
//   "score": [],
//   "state": "sale",
//   "stock": "33",
//   "favorite": [],
//   "companyId": "63def89a96e705cd69d05ff3",
//   "__v": 0
// },{
//   "_id": "63defe0596e705cd69d05ff65",
//   "productname": "Cafe",
//   "price": "1400",
//   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//   "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//   "img": [
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
//   ],
//   "views": "0",
//   "coments": [],
//   "score": [],
//   "state": "sale",
//   "stock": "33",
//   "favorite": [],
//   "companyId": "63def89a96e705cd69d05ff3",
//   "__v": 0
// },{
//   "_id": "63defe0596e705cd69d05ff66",
//   "productname": "Cafe",
//   "price": "1400",
//   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//   "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//   "img": [
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
//   ],
//   "views": "0",
//   "coments": [],
//   "score": [],
//   "state": "sale",
//   "stock": "33",
//   "favorite": [],
//   "companyId": "63def89a96e705cd69d05ff3",
//   "__v": 0
// }
//   ])
 const [productos,setProductos] =useState("")
 const llamadoproducts=()=>{
  const options = {method: 'GET'};

  fetch('http://localhost:8080/getProductos', options)
    .then(response => response.json())
    .then(response => setProductos(response))
    .catch(err => console.error(err));
 }
 useEffect(()=>{
  llamadoproducts()
 },[])
  const [toShow,setToShow] = useState([
    // {
    //   title:"Diapositiva 1",
    //   img:"https://www.sabervivirtv.com/medio/2022/06/09/6-beneficios-del-cafe-para-tu-salud-que-quiza-no-conozcas_532ab4fd_1280x720.jpg",
    //   description:"Esta es la descripcion del elemento 1",
    // },
    // {
    //   title:"Diapositiva 2",
    //   img:"https://www.hogarmania.com/archivos/201301/cafe-formas-de-preparar-xl-668x400x80xX.jpg",
    //   description:"Esta es la descripcion del elemento 2",
    // },
    {
      title:"Diapositiva 3",
      img:"https://ichef.bbci.co.uk/news/640/cpsprodpb/76B0/production/_105848303_gettyimages-996540050.jpg",
      description:"Esta es la descripcion del elemento 3",
    }
  ])

  return (
    <div className="containerHome">
      <NavBarComponent></NavBarComponent>
      <Carrousel toShow={toShow}></Carrousel>
      <div className="container-container-cards">
        <div className="container-cards">
      {productos&&productos.map((product,index)=>{
        return(
          <div>
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
