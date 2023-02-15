import { create } from "zustand";

export const useProductsStore = create((set, get) => ({
  product: false,
  getProducts: async () => {
    const options = { method: "GET" };
    await fetch("http://localhost:8080/getProductos", options)
      .then((response) => response.json())
      .then((response) => set((state) => ({ ...state, product: response })))
      .catch((err) => console.error(err));
  },
}));
