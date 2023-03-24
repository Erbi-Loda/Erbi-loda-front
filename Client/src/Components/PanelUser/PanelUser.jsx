import NavBarComponent2 from "../Navbar/Navbar2.jsx";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import "./PanelUser.style.css";
import ButtonLoda from "../ButtonLoda/ButtonLoda";
import { useEffect, useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

import { useProductsStore } from "../../store/productosStore";
import Card from "../Card/Card";

import { io } from "socket.io-client";
import Chat from "../Chat/Chat.jsx";
import Conf_Panel from "../Conf_Panel/Configuration.jsx";
import Loading2 from "../Loading2/Loading.jsx";

const socket = io(`${import.meta.env.VITE_BACK}/`);

export default function PanelUser(params) {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [muestra, setMuestra] = useState(""); //COMP, EMPR
  const { AgregarAlCarrito, favorite, DetalleProduct, putFavorite } =
    useProductsStore();
  const [chat, setChat] = useState(false);
  const socket = useRef();
  const [companyName, setCompanyName] = useState("");

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
    fetch(`${import.meta.env.VITE_BACK}/user`, options)
      .then((e) => e.json())
      .then((data) => setCurrentUser(data));
  };

  const getchat = ({ user, secondUser, secondUserName }) => {
    setChat({ user, secondUser, secondUserName });
    setMuestra("CHAT");
  };

  const generatorCompany = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Bearer " + localStorage.getItem("userloda"),
      },
      body: JSON.stringify({
        companyname: companyName,
        userId: currentUser._id,
      }),
    };
    fetch(`${import.meta.env.VITE_BACK}/company/register`, options)
      .then((e) => e.json())
      .then((data) => console.log(data));
  };

  const navigate = useNavigate();

  useEffect(() => {
    infoUser();
    localStorage.getItem("userloda")? "" : navigate("/")
  }, []);

  function compare() {
    switch (muestra) {
      case "HIST":
        return (
          <div>
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
          </div>
        );
      case "CONF":
        return (
          <>
            <Conf_Panel />
            {/* <h1>Configuration... to be continued...</h1> */}
          </>
        );
      case "COMPRAS":
        return (
          <div>
            {currentUser?.compras.map((e) => {
              return (
                <h2
                  onClick={() =>
                    getchat({
                      user: e._id,
                      secondUser: e.companyId._id,
                      secondUserName: e.companyId.companyname,
                    })
                  }
                  key={e._id}
                >
                  Vendedor:{e.companyId.companyname}
                </h2>
              );
            })}
          </div>
        );
      case "FAVO":
        return (
          <div>
            {currentUser?.favorite.length == 0 ? (
              <div>
                <h1>ESTA VACIOOOOO VEEES? No hay productos aqui...</h1>
              </div>
            ) : (
              <div className="container-cards">
                {currentUser?.favorite.map((product, index) => {
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
          </div>
        );
      case "CHAT":
        return (
          <Chat
            user={chat.user}
            seconduser={chat.secondUser}
            seconduserName={chat.secondUserName}
            cbcerrar={() => {
              setMuestra("HIST");
            }}
          ></Chat>
        );
      case "EMPR":
        return (
          <div>
            {currentUser.companies.map((c) => {
              return (
                <>
                  <p>{c.companyname}</p>
                </>
              );
            })}
            <hr />
            <h1>Generar empresa</h1>
            <form onSubmit={generatorCompany}>
              <input
                type="text"
                placeholder="nameCompany"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
              <button>+</button>
            </form>
          </div>
        );
      default:
        return (
          <div>
            <h1>
              Bienvenido a tu <strong>Panel de Usuario</strong>.
            </h1>
          </div>
        );
        break;
    }
  }

  return (
    <>
      {currentUser ? (
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
                  cb={() => {
                    setMuestra("HIST");
                  }}
                />
                <ButtonLoda
                  type={"small"}
                  fs={20}
                  text={"Compras"}
                  icon={
                    <ShoppingCartCheckoutIcon style={{ fontSize: "18px" }} />
                  }
                  cb={() => {
                    setMuestra("COMPRAS");
                  }}
                />
                <ButtonLoda
                  type={"small"}
                  fs={20}
                  text={"Favoritos"}
                  icon={
                    <ShoppingCartCheckoutIcon style={{ fontSize: "18px" }} />
                  }
                  cb={() => setMuestra("FAVO")}
                />
                <ButtonLoda
                  type={"small"}
                  fs={20}
                  text={"Empresas"}
                  icon={
                    <ShoppingCartCheckoutIcon style={{ fontSize: "18px" }} />
                  }
                  cb={() => {
                    setMuestra("EMPR");
                  }}
                />
                <ButtonLoda
                  type={"small"}
                  fs={20}
                  text={"Configuración"}
                  icon={<SettingsIcon style={{ fontSize: "18px" }} />}
                  cb={() => {
                    setMuestra("CONF");
                  }}
                />
                <ButtonLoda
                  type={"small"}
                  fs={20}
                  text={"Cerrar Sesion"}
                  icon={<MeetingRoomIcon style={{ fontSize: "18px" }} />}
                  cb={() => {
                    navigate("/login");
                    localStorage.removeItem("userloda");
                  }}
                />
              </div>
            </section>
            {/* Espacio de Muestra para las compras/configuracion/historial/ etc etc. */}
            <div className="muestras">{compare()}</div>
          </div>
        </div>
      ) : (
        <Loading2 />
      )}
    </>
  );
}
