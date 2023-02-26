import React from 'react'
import { useParams } from 'react-router-dom';
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";

import Grid from "@mui/material/Unstable_Grid2";

export default function Buscador() {
    const [checked, setChecked] = React.useState(true);
    const [datos, setDatos] = React.useState([]);
    const {buscar} = useParams()
    React.useEffect(() => {
        fetch(
          "https://erbi-loda-back.vercel.app/"+buscar
        )
          .then((result) => {
            return result.json();
          })
          .then((value) => {
            console.log({value});
          });
      }, []);
      
  return (
    <div>Buscador
        <Box sx={{ height: 180 }}>
      <Box sx={{ display: "flex" }}>
        <Grid
          id="inicio"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {datos.map((_, index) => (
            <Zoom
              in={checked}
              style={{ transitionDelay: checked ? `${index}50ms` : "0ms" }}
            >
              <img
                style={{ width: 200, height: 200 }}
                src={_.pictures[0].url}
                alt="das"
              />
            </Zoom>
          ))}
          <button onClick={nuevo}>dfgdf</button>
        </Grid>
      </Box>
    </Box>
    </div>
  )
}
