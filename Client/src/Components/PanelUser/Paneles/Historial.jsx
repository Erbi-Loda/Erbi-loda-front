import Card from "../../Card/Card";

export default function Historial({currentUser,DetalleProduct,AgregarAlCarrito,favorite,putFavorite}) {
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
}
