import { createContext, useState } from "react";
import { toast } from "react-toastify";
import dbProducts from "../db-products/index";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [dbCart, setDbCart] = useState(
    JSON.parse(localStorage.getItem("@kenzieShop:product")) || []
  );

  const addProductCart = (newId) => {
    const findSelectedProduct = dbProducts.find(
      (current) => current.id === newId
    );
    const findProductInCart = dbCart.find((current) => current.id === newId);

    if (findProductInCart === undefined) {
      const cartData = [...dbCart, findSelectedProduct];
      localStorage.setItem("@kenzieShop:product", JSON.stringify(cartData));
      setDbCart(cartData);
    } else {
      toast.error("Esse produto já está no carrinho");
    }
  };

  const removeAllCart = () => {
    return setDbCart([]);
  };

  const removeProduct = (newId) => {
    const filterProducts = dbCart.filter((current) => current.id !== newId);
    localStorage.setItem("@kenzieShop:product", JSON.stringify(filterProducts));
    setDbCart(filterProducts);
  };

  return (
    <CartContext.Provider
      value={{ addProductCart, removeProduct, removeAllCart, dbCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
