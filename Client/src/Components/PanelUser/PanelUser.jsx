import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import NavBarComponent2 from "../Navbar/Navbar2";
import "./PanelUser.style.css";
import ButtonLoda from '../ButtonLoda/ButtonLoda';

export default function PanelUser(params) {
  const infoUser = {
    username: "Vera",
    password: "Vera123",
    email: "VeraVcp123@gmail.com",
    imgUrl:"https://randomuser.me/api/portraits/women/27.jpg",
    compras: [
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 1,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 2,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 3,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 4,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 5,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
    ],
    companies: [
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 2,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 4,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
    ],
    historial: [
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 2,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 3,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
      {
        nameProduct: "producto",
        urlImg:
          "https://pixabay.com/es/photos/granos-de-caf%c3%a9-caf%c3%a9-asado-frijoles-917613/",
        idProducto: 4,
        descriptionShort:
          "Lorem aoishdka sdi usadpifnalsd fhpiasn ekfjn aps udhfasen fpausi he;fonaspoefh a;sefpiaoseh f;oiasje fpoans df npoasfehf",
      },
    ],
  };

  return (
    <div>
      <NavBarComponent2 />
      <div className="container-PanelUser">
        {/* Barra de navegacion de el usuario */}
        <section className="NavUser">
          <div className="infoUser">
            <div className="container-PhUser">
              <img className="Ph-User" src={infoUser.imgUrl} alt="Aqui va la foto del usuario" />
            </div>
            <h1 className="userName"> {infoUser.username} </h1>
          </div>
          <div className="container-Buttons">
              <ButtonLoda fs={18} text={"Mi Historial"} icon={<HistoryIcon style={{fontSize:'18px'}}/>} />
              <ButtonLoda fs={18} text={"Mis Compras"} icon={<ShoppingCartCheckoutIcon style={{fontSize:'18px'}}/>}/>
              <ButtonLoda fs={18} text={"Configuracio"} icon={<SettingsIcon style={{fontSize:'18px'}}/>} />
              <ButtonLoda fs={18} text={"Cerrar Secion"} icon={<MeetingRoomIcon style={{fontSize:'18px'}}/>} />
          </div>
        </section>
        {/* Espacio de Muestra para las compras/configuracion/historial */}
        <div className="muestras"></div>
      </div>
    </div>
  );
}
