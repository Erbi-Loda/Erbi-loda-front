import "./footer.style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

// function Card() {
//   const creadores = [
//     {
//       name: "Alexis Coronel",
//       url: ["https://github.com/SacZ16","https://www.linkedin.com/in/alexis-coronel/","mailto:alexiscoronel545@gmail.com?Subject=Importante"],
//       img: "https://avatars.githubusercontent.com/u/80395647?v=4",
//     },
//     {
//       name: "Agustin Kowalczuk",
//       url: ["https://github.com/AgustinKowalczuk","https://www.linkedin.com/in/agustinkowalczuk/","mailto:kowalczukagustin@gmail.com?Subject=Importante"],
//       img: "",
//     },
//   ];
//   return (
//     <Paper>
//       {creadores.map((creador) => {
//         return (
//           <div className="CardCreator">
//           <Avatar src={creador.img}/>
//             <h1>{creador.name}</h1>
//             <ul>
//               <li>
//                 <GitHubIcon />
//                 <a href={creador.url[0]} target="_blank">
//                   github
//                 </a>
//               </li>
//               <li>
//                 <LinkedInIcon />
//                 <a
//                   href={creador.url[1]}
//                   target="__blank"
//                 >
//                   linkedin
//                 </a>
//               </li>
//               <li>
//                 <MailOutlineIcon />
//                 <a href={creador.url[2]}>
//                   Correo electronico
//                 </a>
//               </li>
//             </ul>
//           </div>
//         );
//       })}
//     </Paper>
//   );
// }

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Footer() {
  return (
    <footer>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 0,
            width: "100%",
          }}
        >
          <Paper
            className="paper-footer"
            elevation={2}
            sx={{
              backgroundColor: "rgba(0,0,0,.7)",
              padding:"10px",
              margin:"20px 0px 0px 0px"
            }}
          >
            {/* <hr/> */}
            <section className="container-sections">
              <div className="Ayuda">
                <Link to="/infoAyuda" className="link-footer">Ayuda</Link>
              </div>
              <div className="AcercaDe">
                <Link to="/acercaDe" className="link-footer">Acerca de...</Link>
              </div>
              <div className="RedesSociales">
                <Link to="/redesSociales" className="link-footer">Redes Sociales</Link>
              </div>
              <div className="MiCuenta">
                <Link to="/miCuenta" className="link-footer">Mi Cuenta</Link>
              </div>
            </section>
          </Paper>
        </Box>
      </ThemeProvider>
    </footer>
  );
}
