import { create } from "zustand";


//New Store
export const useProductsStore = create((set, get) => ({
  product: false,
  favorite:[],
  getProducts: async () => {
    const options = { method: "GET",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization':'Bearer '+localStorage.getItem('userloda')
    } };
    await fetch("http://localhost:8080/getProductos", options)
      .then((response) => response.json())
      .then((response) => set((state) => ({ ...state, product: response })))
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
      await fetch("http://localhost:8080/getFavoritoUser", options)
        .then((response) => response.json())
        .then((response) => { set((state)=>({...state,favorite:response.favoritos}))
          // console.log(response.favoritos);
          // setfavorite(response.favoritos);
        })
        .catch((err) => console.error(err));
    }
  }
}));
