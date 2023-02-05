import NavBarComponent from "../NavBar";
import Card from "../Card/Card";
import { useState } from "react";
import './Home.style.css'

export default function Home() {
  const [productos,setProductos]=useState([
    {
      "_id": "63defe0596e705cd69d05ff2",
      "productname": "te",
      "price": "20",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
      "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
      "img": [
          "https://okdiario.com/img/recetas/2016/10/26/beneficios-del-te-de-limon.jpg"
      ],
      "views": "0",
      "coments": [],
      "score": [],
      "state": "sale",
      "stock": "33",
      "favorite": [],
      "companyId": "63def89a96e705cd69d05ff3",
      "__v": 0
  },{
    "_id": "63defe0596e705cd69d05ff6",
    "productname": "Cafe",
    "price": "1400",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    "img": [
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
    ],
    "views": "0",
    "coments": [],
    "score": [],
    "state": "sale",
    "stock": "33",
    "favorite": [],
    "companyId": "63def89a96e705cd69d05ff3",
    "__v": 0
},{
  "_id": "63defe0596e705cd69d05ff6",
  "productname": "Cafe",
  "price": "1400",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  "img": [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
  ],
  "views": "0",
  "coments": [],
  "score": [],
  "state": "sale",
  "stock": "33",
  "favorite": [],
  "companyId": "63def89a96e705cd69d05ff3",
  "__v": 0
},{
  "_id": "63defe0596e705cd69d05ff6",
  "productname": "Cafe",
  "price": "1400",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  "img": [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
  ],
  "views": "0",
  "coments": [],
  "score": [],
  "state": "sale",
  "stock": "33",
  "favorite": [],
  "companyId": "63def89a96e705cd69d05ff3",
  "__v": 0
},{
  "_id": "63defe0596e705cd69d05ff6",
  "productname": "Cafe",
  "price": "1400",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  "img": [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg?crop=1.00xw:0.757xh;0,0&resize=640:*"
  ],
  "views": "0",
  "coments": [],
  "score": [],
  "state": "sale",
  "stock": "33",
  "favorite": [],
  "companyId": "63def89a96e705cd69d05ff3",
  "__v": 0
}
  ])
  return (
    <div className="containerHome">
      <NavBarComponent></NavBarComponent>
      <div className="container-cards">
      {productos.map((product)=>{
        return(
          <Card key={product._id} name={product.productname} shDesc={product.shortDescription} price={product.price} img={product.img[0]}/>
        )
      })}
      </div>
    </div>
  );
}
