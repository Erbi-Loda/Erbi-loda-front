import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../../store/productosStore";
import Card from "../Card/Card";

export default function Busqueda() {
  const { AgregarAlCarrito, favorite, DetalleProduct, putFavorite } =
    useProductsStore();

  const { busquedaparams } = useParams();
  const [Resultado, setResultado] = useState(false);
  const pedirResultados = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Bearer " + localStorage.getItem("userloda"),
      },
    };
    await fetch(
      "http://localhost:8080/buscarproductos?" + "busqueda=" + busquedaparams,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResultado(response.busqueda);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    pedirResultados();
  }, []);

  return (
    <div>
      <div className="container-cards">
        {Resultado &&
          Resultado.map((product, index) => {
            return (
              <Card
                DetalleProduct={DetalleProduct}
                agregarAlCarrito={AgregarAlCarrito}
                key={product._id}
                favorite2={favorite}
                favorite={
                  favorite ? favorite.some((e) => e === product._id) : false
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
    </div>
  );
}
