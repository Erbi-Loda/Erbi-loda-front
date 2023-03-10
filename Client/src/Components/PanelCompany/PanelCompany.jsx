import NavBarComponent2 from "../Navbar/Navbar2.jsx";
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import logoGraph from '../../imgs/svg/graphLogo.svg'

import "./PanelCompany.style.css";
import ButtonLoda from '../ButtonLoda/ButtonLoda';

export default function PanelCompany(params) {
  const infoUser = {
    companyName: "Herbalife",
    password: "Herbalife123",
    email: "HerbalifeVcp123@gmail.com",
    imgUrl:"https://pict.sindonews.net/dyn/620/content/2018/02/18/34/1283091/herbalife-kembali-dukung-pelaksanaan-pesan-di-25-kota-nwr-thumb.jpg",
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
      <NavBarComponent2/>
      <div className="container-PanelUser">
        {/* Barra de navegacion de el usuario */}
        <section className="NavUser">
          <div className="infoUser">
            <div className="container-PhUser">
              <img className="Ph-User" src={infoUser.imgUrl} alt="Aqui va la foto del usuario" />
            </div>
            <h1 className="companyName"> {infoUser.companyName} </h1>
          </div>
          <div className="container-Buttons">
              <ButtonLoda fs={18} text={"Estadisticas"} icon={<img width={"27px"} src={logoGraph}/>} />
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
