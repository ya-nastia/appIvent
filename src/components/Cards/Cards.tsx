import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UseTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/action-creators/products";
import { Card } from "../Card/Card";

export const Cards = () => {
  let { products, loading, error } = UseTypedSelector(state => state.products);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (loading) {
    return <h2>Загрузка...</h2>
  }

  if (error) {
    return <h2>Произошла ошибка</h2>
  }

  return (
    <div className="cards">
      {
        products.map(product => {
          return (
            <Card product={product} key={product.id} />
          )
        })
      }
    </div>
  )
}