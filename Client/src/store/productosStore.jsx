import { create } from "zustand";
import toast, { Toaster } from "react-hot-toast";
import { redirect } from "react-router-dom";

const optionsGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Origin: "",
    authorization: "Bearer " + localStorage.getItem("userloda"),
  },
};
export const useProductsStore = create((set, get) => ({
  product: false,
  favorite: [],
  productsRandom: false,
  productsPopulate: false,
  ProductDetail: false,
  ProductDetailState: "1",
  carrito:JSON.parse(localStorage.getItem("carrloer")),
  getProducts: async () => {
    let promesagetproductos = fetch(
      "https://erbi-loda-back.vercel.app/getProductos",
      optionsGET
    )
      .then((response) => response.json())
      .then((response) => set((state) => ({ ...state, product: response })))
      .catch((err) => console.error(err));
  },
  getProductsRandom: async () => {
    await fetch(
      "https://erbi-loda-back.vercel.app/getProductosrandom?limit=5",
      optionsGET
    )
      .then((response) => response.json())
      .then((response) =>
        set((state) => ({ ...state, productsRandom: response }))
      )
      .catch((err) => console.error(err));
  },
  getProductsPopulate: async () => {
    await fetch(
      "https://erbi-loda-back.vercel.app/getProductosFamous?limit=5",
      optionsGET
    )
      .then((response) => response.json())
      .then((response) =>
        set((state) => ({ ...state, productsPopulate: response }))
      )
      .catch((err) => console.error(err));
  },
  getfavorite: async () => {
    if (localStorage.getItem("userloda")) {
      await fetch(
        "https://erbi-loda-back.vercel.app/getFavoritoUser",
        optionsGET
      )
        .then((response) => response.json())
        .then((response) => {
          set((state) => ({ ...state, favorite: response.favoritos }));
        })
        .catch((err) => console.error(err));
    }
  },
  putFavorite: async (id, favoritos) => {
    const options = {
      method: "PUT",
      body: JSON.stringify({ producto: id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Bearer " + localStorage.getItem("userloda"),
      },
    };
    let putfavoritepromite = fetch(
      "https://erbi-loda-back.vercel.app/putFavoritoUser",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        {
          set((state) => ({ ...state, favorite: response.favorito }));
        }
        return response.favorito;
      })
      .catch((err) => console.error(err));
    toast.promise(
      putfavoritepromite,
      {
        loading: "Cargando",
        success: (data) =>
          favoritos.length > data.length ? "Eliminado" : "Agregado",
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 1000,
        },
      }
    );
    return putfavoritepromite;
  },
  DetalleProduct: async (idproducto) => {
    
    {
      set((state) => ({ ...state, ProductDetailState: "Cargando" }));
    }
    await fetch(
      "http://localhost:8080/getProducto/" + idproducto,
      optionsGET
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        {
          set((state) => ({
            ...state,
            ProductDetail: { ...response, quantity: 1 },
            ProductDetailState: idproducto.toString(),
          }));
        }
      })
      .catch((err) => console.error(err));
  },
  AgregarAlCarrito: async (producto) => {
    if (localStorage.getItem("carrloer")) {
      let primera = JSON.parse(localStorage.getItem("carrloer")).some(
        (e) => e._id === producto._id
      )
        ? [...JSON.parse(localStorage.getItem("carrloer"))]
        : [...JSON.parse(localStorage.getItem("carrloer")), {
          _id: producto._id,
          img: producto.img,
          price: producto.price,
          productoname: producto.productoname,
          quantity: 0,
        }];
      Promise.all(
        primera.map((e) => {
          return {
            _id: e._id,
            img: e.img,
            price: e.price,
            productoname: e.productoname,
            quantity: e._id === producto._id ? e.quantity + 1 : e.quantity,
          };
        })
      )
      .then((res) => {
        localStorage.setItem("carrloer", JSON.stringify(res));
        set((state) => ({ ...state, carrito: res }))
        });
    } else {
      localStorage.setItem(
        "carrloer",
        JSON.stringify([
          {
            _id: producto._id,
            img: producto.img,
            price: producto.price,
            productoname: producto.productoname,
            quantity: 1,
          },
        ])
      );
      set((state) => ({ ...state, carrito: [
        {
          _id: producto._id,
          img: producto.img,
          price: producto.price,
          productoname: producto.productoname,
          quantity: 1,
        },
      ] }))
    }
  },
  Sumar1ProductoExistente:async (id)=>{
    let cero = JSON.parse(localStorage.getItem("carrloer"))
    let primera = cero.findIndex((e)=>e._id===id)
    let segunda= cero[primera].quantity=cero[primera].quantity+1
    localStorage.setItem("carrloer", JSON.stringify(cero));
    set((state) => ({ ...state, carrito: cero }))
  },
  Eliminar1ProductoExistente:async (id)=>{
    let cero = JSON.parse(localStorage.getItem("carrloer"))
    let primera = cero.findIndex((e)=>e._id===id)
    let segunda= cero[primera].quantity=cero[primera].quantity-1
    if(cero[primera].quantity===0){
      let cuarta= cero.filter(e=>e._id!==id)
      console.log({cuarta})
      localStorage.setItem("carrloer", JSON.stringify(cero.filter(e=>e._id!==id)));
      set((state) => ({ ...state, carrito: cero.filter(e=>e._id!==id) }))
    }
    if(cero[primera].quantity>0){
      localStorage.setItem("carrloer", JSON.stringify(cero));
      set((state) => ({ ...state, carrito: cero }))

    }
  },
}));
