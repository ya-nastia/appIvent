import React from "react";
import { Product } from "../../types/products";
import { useActions } from '../../hooks/useActions';
import { UseTypedSelector } from '../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';

type CardProps = {
  product: Product;
}

export const Card = ({product}: CardProps) => {
  const {image, name, price } = product;

  const { cartProducts } = UseTypedSelector(store => store.cartProducts);

  let res = cartProducts.find(cartProduct => cartProduct.id === product.id);
  let isProductInCart = (res === undefined) ? false : true;

  const { addToCart } = useActions();

  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt="" />
      </div>
      <div className="card__description">
        <div className="card__name">{name}</div>
        <div className="card__price">{price} p</div>
      </div>
      <div className="card__button">
        {
          isProductInCart ? 
            (
              <button><Link to='cart'>Оформить заказ</Link></button>
            ) :
            (
              <button onClick={() => addToCart(product)}>Добавить в корзину</button>
            )
        }
      </div>
    </div>
  )
}