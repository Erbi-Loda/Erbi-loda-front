import * as React from "react";
import CardBox from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Card.style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card({
  name,
  favorite,
  shDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  price = "$$$",
  img,
  id,
}) {
  // const [favorite, setfavorite] = React.useState([]);
  // const getFavorite = async (e) => {
  //   if (localStorage.getItem("userloda")) {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Origin: "",
  //         authorization: "Bearer " + localStorage.getItem("userloda"),
  //       },
  //     };
  //     await fetch("http://localhost:8080/getFavoritoUser", options)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response.favoritos);
  //         setfavorite(response.favoritos);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // };
  // useEffect(() => {
  //   getFavorite();
  // }, []);

  const putFavorite = async () => {
    const options = {
      method: "PUT",
      body: JSON.stringify({ producto: id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Bearer " + localStorage.getItem("userloda"),
      },
    };
    await fetch("http://localhost:8080/putFavoritoUser", options)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setfavorite(response.favorito);
      })
      .catch((err) => console.error(err));
  };
  return (
    <CardBox
      sx={{ margin: "15px", width: "224px" }}
      className="contenedor-carta-postproduct"
    >
        <Link to={"/producto/" + id} style={{textDecoration:'none'}}>
      <div className="conetnedor-hover-shDesct-postproduct">
          <div className="contenedor-img-card">
            <img
              src={img}
              alt={"image product"}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        <div className="hover-shDesct-postproduct">
          <Typography
            style={{
              width: "224px",
              height: "80px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            variant="body2"
            color="text.secondary"
          >
            {shDesc.length > 70 ? shDesc.slice(0, 70) + "..." : shDesc}
          </Typography>
        </div>
      </div>
        </Link>
      <CardContent sx={{ position: "relative", padding: "16px 16px 0px 16px" }}>
        <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <div
          style={{
            position: "absolute",
            width: "max-content",
            top: "0",
            right: "55px",
          }}
        >
          <div
            style={{ position: "relative", width: "max-content", zIndex: "2" }}
          >
            <TurnedInIcon
              //onClick={putFavorite}
              sx={{
                width: "55px",
                height: "55px",
                position: "absolute",
                top: "-10px",
                color: "#003A00",
              }}
            ></TurnedInIcon>
            <FavoriteIcon
              //onClick={putFavorite}
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
        </div>{" "}
      </CardContent>
      <CardActions style={{ justifyContent: "space-around" }}>
        <Link to={"/producto/" + id} style={{textDecoration:'none'}}>
          <Button size="small" style={{ border: "2px solid #016c12" }}>
            Ver mas
          </Button>
        </Link>
        <Button size="small" style={{ border: "2px solid #016c12" }}>
          carrito
        </Button>
      </CardActions>
    </CardBox>
  );
}
