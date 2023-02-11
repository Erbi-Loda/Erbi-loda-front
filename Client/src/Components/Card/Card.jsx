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

export default function Card({
  name,
  shDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
  price = "$$$",
  img,
  id,
}) {
  const [favorite, setfavorite] = React.useState([]);
  return (
    <CardBox sx={{ margin: "15px", width: "224px" }} className='contenedor-carta-postproduct'>
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
          <div style={{ position: "relative", width: "max-content" ,zIndex:'2'}}>
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
                favorite.includes(id)
                  ? setfavorite(favorite.filter((e) => e !== id))
                  : setfavorite([...favorite, id]);
              }}
              sx={[
                {
                  position: "absolute",
                  width: "35px",
                  height: "25px",
                  left: "10px",
                  top: "0px",
                },
                favorite.includes(id)
                  ? { color: "#00F106" }
                  : { color: "white" },
              ]}
            ></FavoriteIcon>
          </div>
        </div>{" "}
        
      </CardContent>
      <CardActions style={{justifyContent:'space-around'}}>
        <Button size="small">Comprar</Button>
        <Button size="small">carrito</Button>
      </CardActions>
    </CardBox>
  );
}
