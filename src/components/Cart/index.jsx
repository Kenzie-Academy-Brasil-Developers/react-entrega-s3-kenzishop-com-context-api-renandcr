import CartStyle from "./styled";
import { ImBin } from "react-icons/im";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Cart = ({ current }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <CartStyle>
      <img src={current.img} alt="Relógio" />
      <div className="div-cart-description">
        <h2>{current.description}</h2>
      </div>
      <div className="div-cart-price">
        <span className="cart-price">R$ {current.price}</span>
        <span className="cart-romove" onClick={() => removeProduct(current.id)}>
          Remover do carrinho
        </span>
        <ImBin
          className="icon-lixeira"
          onClick={() => removeProduct(current.id)}
        />
      </div>
    </CartStyle>
  );
};
export default Cart;
