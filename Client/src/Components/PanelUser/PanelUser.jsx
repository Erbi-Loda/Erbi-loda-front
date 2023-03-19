import NavBarComponent2 from "../Navbar/Navbar2.jsx";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import "./PanelUser.style.css";
import ButtonLoda from "../ButtonLoda/ButtonLoda";
import { useEffect, useState } from "react";

import { useProductsStore } from "../../store/productosStore";
import Card from "../Card/Card";

import io from "socket.io-client";

const socket = io("http://localhost:8080/");

export default function PanelUser(params) {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [muestra, setMuestra] = useState("WELC"); //COMP, EMPR
  const { AgregarAlCarrito, favorite, DetalleProduct, putFavorite } =
    useProductsStore();
  const infoUser = () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Bearer " + localStorage.getItem("userloda"),
      },
    };
    fetch("http://localhost:8080/user", options)
      .then((e) => e.json())
      .then((data) => setCurrentUser(data));
  };
  // const pedirhistorial = () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Origin: "",
  //       authorization: "Bearer " + localStorage.getItem("userloda"),
  //     },
  //   };
  //   fetch("http://localhost:8080/gethistorialinfinitouser", options)
  //     .then((e) => e.json())
  //     .then((data) => console.log(data));
  // };

  const getHistorial = () => {
    console.log("Si funciona XD", currentUser.historial);
    socket.emit('ingreso al historial',currentUser._id)
    setMuestra("HIST");
  };

  const getConfiguration = () =>{
    console.log("CONF");
    setMuestra("CONF");
  }

  useEffect(() => {
    infoUser();
    // pedirhistorial();
  }, []);

  function compare(){
    switch(muestra){
      case "HIST":
        console.log("Entraste al historial...")
        return(<div>
              {currentUser?.historial.length == 0 ? (
                <div>
                  <h1>ESTA VACIOOOOO VEEES? No hay productos aqui...</h1>
                </div>
              ) : (
                <div className="container-cards">
                  {currentUser?.historial.map((product, index) => {
                    return (
                      <Card
                        DetalleProduct={DetalleProduct}
                        agregarAlCarrito={AgregarAlCarrito}
                        key={product._id}
                        favorite2={favorite}
                        favorite={
                          favorite
                            ? favorite.some((e) => e === product._id)
                            : false
                        }
                        putFavorite={putFavorite}
                        id={product._id}
                        name={product.productoname}
                        shDesc={product.shortDescription}
                        price={product.price}
                        img={product.img[0]}
                      />
                    );
                  })}
                </div>
              )}
            </div>)
      case "CONF":
        return(
          <div>
            <h1>Configuration... to be continued...</h1>
          </div>
        )
      default:
        console.log("No se reciben visitas")
      break;
    }
  }

  return (
    <div>
      <NavBarComponent2 />
      <div className="container-PanelUser">
        {/* Barra de navegacion de el usuario */}
        <section className="NavUser">
          <div className="infoUser">
            <div className="container-PhUser">
              <h1>{currentUser?.name[0].toUpperCase()}</h1>
            </div>
            <h1 className="userName">
              {currentUser?.name.slice(0, 7)}
              {currentUser?.name.length > 7 && "..."}
            </h1>
          </div>
          <div className="container-Buttons">
            <ButtonLoda
              type={"small"}
              fs={20}
              text={"Historial"}
              icon={<HistoryIcon style={{ fontSize: "18px" }} />}
              cb={getHistorial}
            />
            <ButtonLoda
              type={"small"}
              fs={20}
              text={"Compras"}
              icon={<ShoppingCartCheckoutIcon style={{ fontSize: "18px" }} />}
              cb={getConfiguration}
            />
            <ButtonLoda
              type={"small"}
              fs={20}
              text={"Favoritos"}
              icon={<ShoppingCartCheckoutIcon style={{ fontSize: "18px" }} />}
            />
            <ButtonLoda
              type={"small"}
              fs={20}
              text={"Empresas"}
              icon={<ShoppingCartCheckoutIcon style={{ fontSize: "18px" }} />}
            />
            <ButtonLoda
              type={"small"}
              fs={20}
              text={"Configuración"}
              icon={<SettingsIcon style={{ fontSize: "18px" }} />}
              cb={ getConfiguration}
            />
            <ButtonLoda
              type={"small"}
              fs={20}
              text={"Cerrar Sesion"}
              icon={<MeetingRoomIcon style={{ fontSize: "18px" }} />}
            />
          </div>
        </section>
        {/* Espacio de Muestra para las compras/configuracion/historial */}
        <div className="muestras">
          {
            compare()
          }
        </div>
      </div>
    </div>
  );
}
