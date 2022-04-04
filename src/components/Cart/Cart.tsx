import React from "react";
import { UseTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export const Cart = () => {
  const { cartProducts } = UseTypedSelector(store => store.cartProducts);
  const { removeFromCart } = useActions();

  const sum = cartProducts.reduce((accumulator, current) => { return accumulator + current.price}, 0);

  if (cartProducts.length === 0) {
    return (
      <h2>Корзина пуста</h2>
    )
  }

  return (
    <>
      <h2 className="cart-header">Корзина</h2>
      <div className="cart">
        <table>
          <tbody>
            {
              cartProducts.map(product => {
                return (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.price} P</td>
                    <td>
                      <button onClick={() => removeFromCart(product)}>X</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="cart__sum">Итого: {sum} Р</div>
      </div>
    </>
  )
}