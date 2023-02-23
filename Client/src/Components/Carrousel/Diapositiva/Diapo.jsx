import { Paper } from "@mui/material";
//icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
//style
import "../Carrousel.style.css";

//img Tech
import reactIMG from "../../../imgs/Tech/logo-react-js.png";
import vite from "../../../imgs/Tech/logo-vite.svg";
import cloudinary from "../../../imgs/Tech/logo-cloudinary.png";
import jwt from "../../../imgs/Tech/logo-jwt.png";
import mui from "../../../imgs/Tech/logo-mui.png";
import node from "../../../imgs/Tech/logo-nodeJS.png";
import ex from "../../../imgs/Tech/logo-EX.webp";
import mongo from "../../../imgs/Tech/logo-mongodb.png";
import BCrypt from "../../../imgs/Tech/logo-BCrypt.png";

function CardTech(props) {
  return (
    <div className="card-container-diapo">
      <img src={props.urlImg} width="150px" alt="imgTech" />
      <h1>name Tech</h1>
    </div>
  );
}

export default function Diapo(props) {
  const info = props.item;
  //NO un array de url's  / Si un array de obj
  // ["url","url"]        / [{ nameTech: Mongo.png, urlImg:"url" }]

  const techs = [reactIMG, vite, cloudinary, jwt, mui, node, ex, mongo, BCrypt];
  return (
    <Paper
      sx={{
        p: "15px",
        bgcolor: "rgba(1,1,1,.8)",
      }}
    >
      <div className=".Container">
        <h1 className="title-diapo">
          {info.title === "Diapositiva 3"
            ? "Creadores"
            : info.title === "Diapositiva 2"
            ? "Tecnologias"
            : info.title}
        </h1>
        <div className="row">
          {info.title === "Diapositiva 3" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "calc(100vh - 270px)",
                width: "80vw",
              }}
            >
              <div className="card-carrousel-creador-contenedor">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div>
                    <h2 style={{ color: "black", fontSize: "2.5em" }}>
                      Alexis Coronel
                    </h2>
                    <h4 style={{ color: "black", fontSize: "1.5em" }}>
                      Front-End Developer
                    </h4>
                  </div>
                  <div className="user-photo-card">
                    <img
                      style={{ width: "100%" }}
                      src="https://avatars.githubusercontent.com/u/80395647?s=400&u=01e7b604469ed2c7dd1fc1eda1798fe6a6ccc291&v=4"
                      alt="perfil"
                    ></img>
                  </div>
                </div>
                <img
                  className="img-card"
                  align="left"
                  src="https://github-readme-stats.vercel.app/api?username=SacZ16&show_icons=true&theme=yeblu"
                  alt="SacZ16"
                />
                <div className="button-card-contenedor">
                  <button className="button-card">
                    <GitHubIcon></GitHubIcon> Github
                  </button>
                  <button className="button-card">
                    <LinkedInIcon></LinkedInIcon> LinkedIn
                  </button>
                  <button
                    onClick={(e) => {
                      window.location.href =
                        "mailto:alexiscoronel545@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.";
                    }}
                    className="button-card"
                  >
                    <EmailIcon></EmailIcon> Email
                  </button>
                </div>
              </div>
              <div className="card-carrousel-creador-contenedor">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div>
                    <h2 style={{ color: "black", fontSize: "2.5em" }}>
                      Agustin Kowalczuk
                    </h2>
                    <h4 style={{ color: "black", fontSize: "1.5em" }}>
                      Front-End Developer
                    </h4>
                  </div>
                  <div className="user-photo-card">
                    <img
                      style={{ width: "100%" }}
                      src="https://media.licdn.com/dms/image/C5603AQHkB-TvtMPboQ/profile-displayphoto-shrink_200_200/0/1621871796102?e=1681948800&v=beta&t=DW7j_Lu-PsH1iXLDQBJE0yEt1r0yRhxzZ3Lx1cwgKUk"
                      alt="perfil"
                    ></img>
                  </div>
                </div>
                <img
                  align="left"
                  className="img-card"
                  src="https://github-readme-stats.vercel.app/api?username=AgustinKowalczuk&count_private=true&bg_color=202020&text_color=B9B9B9"
                  alt="AgustinKowalczuk"
                />
                <div className="button-card-contenedor">
                  <button className="button-card">
                    <GitHubIcon></GitHubIcon> Github
                  </button>
                  <button className="button-card">
                    <LinkedInIcon></LinkedInIcon> LinkedIn
                  </button>
                  <button
                    onClick={(e) => {
                      window.location.href =
                        "mailto:Kowalczukagustin@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.";
                    }}
                    className="button-card"
                  >
                    <EmailIcon></EmailIcon> Email
                  </button>
                </div>
              </div>
            </div>
          ) : info.title === "Diapositiva 2" ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(224px, 1fr))",
                height: "calc(100vh - 270px)",
                width: "80vw",
              }}
            >
              {techs.map((img, i) => {
                return <CardTech key={i + "diapo"} urlImg={img} />;
              })}
            </div>
          ) : (
            <>
              <img
                draggable="false"
                className="img-diapo"
                src={`${info.img}`}
              />
              <p>{info.description}</p>
            </>
          )}
        </div>
      </div>
    </Paper>
  );
}
