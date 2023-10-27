import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: () => {},
  updateItemQuantity: () => {},
}); // create a context object
