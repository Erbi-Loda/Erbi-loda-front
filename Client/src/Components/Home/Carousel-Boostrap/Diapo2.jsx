
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
import './carousel.css'

function CardTech(props) {
    return (
      <div className="card-container-diapo">
        <img src={props.urlImg} width="150px" style={props.name==="Node.js"?{height:'150px'}:{height:'150px',objectFit:'cover',objectPosition:'center'}} alt="imgTech" />
        <h1>{props.name}</h1>
      </div>
    );
  }

export default function Diapo2() {
    const techs = [{name:'React',img:reactIMG}, {name:"vite",img:vite}, {name:"cloudinary",img:cloudinary}, {name:"JWT",img:jwt}, {name:"MUI",img:mui}, {name:"Node.js",img:node}, {name:"Express",img:ex}, {name:"Mongo DB",img:mongo}, {name:"BCrypt",img:BCrypt}];
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(224px, 1fr))",
        gridTemplateRows:"max-content",
        height: "calc(100vh - 270px)",
        width: "80vw",
        margin:'auto',
        gap:'10px'
      }}>
        {techs.map((tech, i) => {
                return <CardTech key={i + "diapo"} urlImg={tech.img} name={tech.name} />;
              })}
    </div>
  )
}
