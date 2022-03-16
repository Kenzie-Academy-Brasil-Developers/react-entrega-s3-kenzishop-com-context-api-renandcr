import CardStyle from "./styled";
import DefaultStyleButton from "../Button/styled";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Card = ({ current }) => {
  const { addProductCart } = useContext(CartContext);
  return (
    <CardStyle>
      <img src={current.img} alt="Relógio" />
      <div>
        <h2>{current.description}</h2>
        <span>R$ {current.price}</span>
        <DefaultStyleButton onClick={() => addProductCart(current.id)}>
          Adicionar ao carrinho
        </DefaultStyleButton>
      </div>
    </CardStyle>
  );
};
export default Card;
