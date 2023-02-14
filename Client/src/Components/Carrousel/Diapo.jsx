import { Paper } from "@mui/material";
//icons
import {GitHubIcon, LinkedInIcon, EmailIcon} from '@mui/icons-material'
export default function Diapo(props) {
    const info = props.item;
    return (
      <Paper
        sx={{
          p: "15px",
          bgcolor: "rgba(1,1,1,.8)",
        }}
      >
        <div className=".Container">
          <h1 className="title-diapo">{info.title === "Diapositiva 3" ?'Creadores':info.title === "Diapositiva 2" ?'Tecnologias':info.title}</h1>
          <div className="row">
            {info.title === "Diapositiva 3" ? (
              <div style={{ display: "flex", justifyContent: "space-between",height:'calc(100vh - 270px)',width:'80vw'}}>
                
                <div className="card-carrousel-creador-contenedor">
              <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                <div>
                  <h2 style={{color:'black',fontSize:'2.5em'}}>Alexis Coronel</h2>
                  <h4 style={{color:'black',fontSize:'1.5em'}}>Front-End Developer</h4>
                </div>
                  <div className="user-photo-card">
                    <img style={{width:'100%'}} src="https://avatars.githubusercontent.com/u/80395647?s=400&u=01e7b604469ed2c7dd1fc1eda1798fe6a6ccc291&v=4" alt="perfil"></img>
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
                  <GitHubIcon></GitHubIcon>  Github
                  </button>
                  <button className="button-card">
                   <LinkedInIcon></LinkedInIcon> LinkedIn
                  </button>
                  <button onClick={(e) => {window.location.href ='mailto:alexiscoronel545@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.';}} className="button-card">
                   <EmailIcon></EmailIcon> Email
                  </button>
                  </div>
                  </div>
                <div className="card-carrousel-creador-contenedor">
              <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
                <div>
                  <h2 style={{color:'black',fontSize:'2.5em'}}>Agustin Kowalczuk</h2>
                  <h4 style={{color:'black',fontSize:'1.5em'}}>Front-End Developer</h4>
                </div>
                  <div className="user-photo-card">
                    <img style={{width:'100%'}} src="https://media.licdn.com/dms/image/C5603AQHkB-TvtMPboQ/profile-displayphoto-shrink_200_200/0/1621871796102?e=1681948800&v=beta&t=DW7j_Lu-PsH1iXLDQBJE0yEt1r0yRhxzZ3Lx1cwgKUk" alt="perfil"></img>
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
                  <GitHubIcon></GitHubIcon>  Github
                  </button>
                  <button className="button-card">
                   <LinkedInIcon></LinkedInIcon> LinkedIn
                  </button>
                  <button onClick={(e) => {window.location.href ='mailto:Kowalczukagustin@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.';}} className="button-card">
                   <EmailIcon></EmailIcon> Email
                  </button>
                  </div>
                  </div>
                
              </div>
            ) :info.title === "Diapositiva 2" ?<div  style={{ display: "grid", gridTemplateColumns:'repeat(auto-fit, minmax(224px, 1fr))',height:'calc(100vh - 270px)',width:'80vw'}}>
            <img width={'100%'}  height='100%' src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" alt="" />
            <img width={'100%'}  height='100%' src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="" />
            <img width={'100%'}  height='100%' src="https://miro.medium.com/max/500/1*pLhqRKXZAmpJP4wpEPfM4w.png" alt="" />
            <img width={'100%'}  height='100%' src="https://miro.medium.com/max/480/1*qMC7g40mcQmeI3r-hMjY8Q.png" alt="" />
            <img width={'100%'} height='100%' src="https://mui.com/static/logo.png" alt="" />
            <img width={'100%'} height='100%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="" />
            <img width={'100%'} height='100%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png" alt="" />
            <img width={'100%'} height='100%' src="https://img.icons8.com/color/512/mongodb.png" alt="" />
            <img width={'100%'} height='100%' src="data:image/jpeg;base64,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" alt="" />
            </div> :(
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