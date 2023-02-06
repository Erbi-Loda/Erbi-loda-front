import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./Carrousel.style.css";

export default function Carrousel(props) {
  const items = props.toShow || [
    {
      title:"Diapositiva 1 de ejemplo",
      img:"https://www.sabervivirtv.com/medio/2022/06/09/6-beneficios-del-cafe-para-tu-salud-que-quiza-no-conozcas_532ab4fd_1280x720.jpg",
      description:"Esta es la descripcion del elemento 1",
    },
    {
      title:"Diapositiva 2 de ejemplo",
      img:"https://www.hogarmania.com/archivos/201301/cafe-formas-de-preparar-xl-668x400x80xX.jpg",
      description:"Esta es la descripcion del elemento 2",
    },
    {
      title:"Diapositiva 3 de ejemplo",
      img:"https://ichef.bbci.co.uk/news/640/cpsprodpb/76B0/production/_105848303_gettyimages-996540050.jpg",
      description:"Esta es la descripcion del elemento 3",
    }
  ];

  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "1rem", // 1
          color: "gray", // 3
          width: ".5rem",
          height: ".5rem"
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "black", // 2
        },
      }}
      IndicatorIcon={"●"}
    >
      {items.map((item, i) => (
        <Diapo key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Diapo(props) {
  const info = props.item
  return (
    <Paper>
      <h1>{info.title}</h1>
      <img className="img-diapo" src={`${info.img}`} />
      <p >{info.description}</p>
    </Paper>
  );
}
