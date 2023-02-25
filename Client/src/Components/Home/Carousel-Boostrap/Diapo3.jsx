import './carousel.css'

export default function Diapo3() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "calc(100vh - 270px)",
        width: "80vw",
        margin: "auto",
      }}
    >
      <div className="card-carrousel-creador-contenedor">
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            textAlign:'center'
          }}
        >
          <div>
            <h2 style={{ color: "black", fontSize: "3.5vw" }}>
              Alexis Coronel
            </h2>
            <h4 style={{ color: "black", fontSize: "2vw" }}>
              Front-End Developer
            </h4>
          </div>
        </div>
        <img
          className="img-card"
          align="left"
          src="https://github-readme-stats.vercel.app/api?username=SacZ16&show_icons=true&theme=yeblu"
          alt="SacZ16"
        />
        <img
          className="img-card"
          align="left"
          src="https://github-readme-streak-stats.herokuapp.com/?user=sacz16&show_icons=true&theme=yeblu"
          alt="SacZ16"
        />
        <div className="button-card-contenedor">
          <button className="button-card">Github</button>
          <button className="button-card">LinkedIn</button>
          <button
            onClick={(e) => {
              window.location.href =
                "mailto:alexiscoronel545@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.";
            }}
            className="button-card"
          >
            Email
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
            textAlign:'center'
          }}
        >
          <div>
            <h2 style={{ color: "black", fontSize: "3.5vw" }}>
              Agustin Kowalczuk
            </h2>
            <h4 style={{ color: "black", fontSize: "2vw" }}>
              Front-End Developer
            </h4>
          </div>
        </div>
        <img
          align="left"
          className="img-card"
          src="https://github-readme-stats.vercel.app/api?username=AgustinKowalczuk&count_private=true&show_icons=true&bg_color=202020&text_color=B9B9B9"
          alt="AgustinKowalczuk"
        />
        <img
          className="img-card"
          align="left"
          src="https://github-readme-streak-stats.herokuapp.com/?user=AgustinKowalczuk&show_icons=true&bg_color=202020&text_color=B9B9B9&theme=dark"
          alt="SacZ16"
        />
        <div className="button-card-contenedor">
          <button className="button-card">Github</button>
          <button className="button-card">LinkedIn</button>
          <button
            onClick={(e) => {
              window.location.href =
                "mailto:Kowalczukagustin@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.";
            }}
            className="button-card"
          >
            Email
          </button>
        </div>
      </div>
    </div>
  );
}
