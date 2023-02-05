import * as React from 'react';
import CardBox from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.style.css"

export default function Card({name,shDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",price="$$$", img}) {
  return (
    <CardBox sx={{margin:"1rem", maxWidth: 'calc("100% / 5")' }}>
      <CardMedia
        sx={{ height: 224 }}
        image={img}
        title="image product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">{shDesc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">carrito</Button>
      </CardActions>
    </CardBox>
  );
}