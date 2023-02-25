import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselBoostrap() {
  return (
    <Carousel style={{height:"calc(100vh - 64px)"}}>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={1500}>
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
                     Github
                  </button>
                  <button className="button-card">
                     LinkedIn
                  </button>
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
                     Github
                  </button>
                  <button className="button-card">
                     LinkedIn
                  </button>
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
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBoostrap;