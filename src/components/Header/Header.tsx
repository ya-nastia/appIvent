import React from "react";
import { Link } from "react-router-dom";
import { UseTypedSelector } from "../../hooks/useTypedSelector";

export const Header = () => {
  const { amount } = UseTypedSelector(state => state.cartProducts);

  return (
    <header className="header">
      <div className="header__name">AppIvent</div>
      <div className="header__menu">
        <ul>
          <li><Link to='/'>Каталог</Link></li>
          <li><Link to='cart'>Корзина <span className="amount">{amount}</span></Link></li>
        </ul>
      </div>
    </header>
  )
}