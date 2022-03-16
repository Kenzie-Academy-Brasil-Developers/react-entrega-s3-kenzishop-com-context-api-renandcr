import Cart from "../../components/Cart";
import CartTotal from "../../components/CartTotal";
import CartSectionStyle from "./styled";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const CartPage = ({ total, amount }) => {
  const { dbCart } = useContext(CartContext);

  const user = JSON.parse(localStorage.getItem("@kenzieShop:user")) || null;

  return (
    <CartSectionStyle>
      <ul>
        {user !== null && <h1>Seja bem-vindo(a), {user.name}</h1>}
        {dbCart.length > 0 &&
          dbCart.map((current, index) => (
            <Cart key={index} current={current} />
          ))}
      </ul>
      <CartTotal total={total} amount={amount} />
    </CartSectionStyle>
  );
};
export default CartPage;
