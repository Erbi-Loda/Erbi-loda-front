// import React from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Logo from "../../imgs/logo.png";
import Diapo from "./Diapositiva/Diapo";

// estilos
import "./Carrousel.style.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  justifyContent: "center",
  // width:"100%"
  color: "GrayText",
  lineHeight: "100%",
  // alignItems: "center",
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Carrousel(props) {
  const items = props.toShow || [
    {
      title: "Diapositiva 1 de ejemplo",
      img: "https://www.sabervivirtv.com/medio/2022/06/09/6-beneficios-del-cafe-para-tu-salud-que-quiza-no-conozcas_532ab4fd_1280x720.jpg",
      description: "Esta es la descripcion del elemento 1",
    },
    {
      title: "Diapositiva 2 de ejemplo",
      img: "https://www.hogarmania.com/archivos/201301/cafe-formas-de-preparar-xl-668x400x80xX.jpg",
      description: "Esta es la descripcion del elemento 2",
    },
    {
      title: "Diapositiva 3 de ejemplo",
      img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/76B0/production/_105848303_gettyimages-996540050.jpg",
      description:
        "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</div>",
    },
  ];

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            p: 1,
            bgcolor: "rgba(0,0,0,0)",
            transition:"0"
          }}
        >
          <Carousel
            height={"87vh"}
            width={"80vh"}
            indicatorIconButtonProps={{
              style: {
                padding: "1rem",
                color: "gray",
                width: ".5rem",
                height: ".5rem",
                // transition:"all 0ms"
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#00F106 ",
                filter:
                  "contrast(40%) sepia(1) hue-rotate(80deg) saturate(450%)",
              },
            }}
            IndicatorIcon={<img style={{ width: "25px" }} src={Logo} />}
            animation="slide"
          >
            {items.map((item, i) => (
              <Item
              key={i+'carrousel'}
                sx={{
                  backgroundColor: "rgba(0,0,0,0)",
                }}
                elevation={0}
              >
                <Diapo className="Diapo" key={i} item={item} />
              </Item>
            ))}
          </Carousel>
        </Box>
      </ThemeProvider>
    </div>
  );
}