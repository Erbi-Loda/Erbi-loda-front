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
  id
}) {
  const [favorite, setfavorite] = React.useState([])
  return (
    <CardBox sx={{ margin: "15px", width: "224px" }}>
      <CardMedia sx={{ height: 224 }} image={img} title="image product" />
      <CardContent sx={{ position: "relative" }}>
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
          <div style={{ position: "relative", width: "max-content" }}>
            <TurnedInIcon
              sx={{
                width: "55px",
                height: "55px",
                position: "absolute",
                top: "-10px",
                color:'#003A00'
              }}
            ></TurnedInIcon>
            <FavoriteIcon
            onClick={()=>{favorite.includes(id)?setfavorite(favorite.filter(e=>e!==id)):setfavorite([...favorite,id])}}
              sx={[
                {
                  position: "absolute",
                  width: "35px",
                  height: "25px",
                  left: "10px",
                  top: "0px",
                },favorite.includes(id)? {color: "#00F106"}:{color: "white"},
              ]}
            ></FavoriteIcon>
          </div>
        </div>
        <Typography variant="body2" color="text.secondary">
          {shDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">carrito</Button>
      </CardActions>
    </CardBox>
  );
}
