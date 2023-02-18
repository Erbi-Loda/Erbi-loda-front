import { create } from "zustand";


//New Store
export const useProductsStore = create((set, get) => ({
  product: false,
  getProducts: async () => {
    const options = { method: "GET",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization':'algo'
    } };
    await fetch("http://localhost:8080/getProductos", options)
      .then((response) => response.json())
      .then((response) => set((state) => ({ ...state, product: response })))
      .catch((err) => console.error(err));
  },
}));
