import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: () => {},
  removeItem: (id) => {},
  clearCart: () => {},
}); // create a context object
