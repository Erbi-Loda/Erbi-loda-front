import { create } from "zustand";


//New Store
export const useProductsStore = create((set, get) => ({
  product: false,
  favorite:[],
  productsRandom:false,
  productsPopulate:false,
  ProductDetail:false,
  ProductDetailState:"1",
  getProducts: async () => {
    const options = { method: "GET",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization':'Bearer '+localStorage.getItem('userloda')
    } };
    await fetch("https://erbi-loda-back.vercel.app/getProductos", options)
      .then((response) => response.json())
      .then((response) => set((state) => ({ ...state, product: response })))
      .catch((err) => console.error(err));
  },
  getProductsRandom: async () => {
    const options = { method: "GET",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization':'Bearer '+localStorage.getItem('userloda')
    } };
    await fetch("https://erbi-loda-back.vercel.app/getProductosrandom?limit=5", options)
      .then((response) => response.json())
      .then((response) => set((state) => ({ ...state, productsRandom: response })))
      .catch((err) => console.error(err));
  },
  getProductsPopulate: async () => {
    console.log('holias')
    const options = { method: "GET",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization':'Bearer '+localStorage.getItem('userloda')
    } };
    await fetch("https://erbi-loda-back.vercel.app/getProductosFamous?limit=5", options)
      .then((response) => response.json())
      .then((response) => set((state) => ({ ...state, productsPopulate: response })))
      .catch((err) => console.error(err));
  },
  getfavorite:async()=>{
    if (localStorage.getItem("userloda")) {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization: "Bearer " + localStorage.getItem("userloda"),
        },
      };
      await fetch("https://erbi-loda-back.vercel.app/getFavoritoUser", options)
        .then((response) => response.json())
        .then((response) => { set((state)=>({...state,favorite:response.favoritos}))
        })
        .catch((err) => console.error(err));
    }
  },
  putFavorite:async (id) => {
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
    await fetch("https://erbi-loda-back.vercel.app/putFavoritoUser", options)
      .then((response) => response.json())
      .then((response) => { {set((state)=>({...state,favorite:response.favorito}))}
      })
      .catch((err) => console.error(err));
  },
  DetalleProduct: async (idproducto) => {
    {set((state)=>({...state,ProductDetailState:"Cargando"}))}
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
      "https://erbi-loda-back.vercel.app/getProducto/" + idproducto,
      options
    )
      .then((response) => response.json())
      .then((response) => {{set((state)=>({...state,ProductDetail:response,ProductDetailState:idproducto.toString()}))}
      })
      .catch((err) => console.error(err));
  },
}));
