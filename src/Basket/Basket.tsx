import React, { Component, useState, useEffect } from "react";
import Catalog, { DataApi } from "../Catalog/Catalog";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import BasketItem from "./BasketItem";
import "../styles/basket.scss";
import { Button } from "@consta/uikit/Button";
import Header1 from "../Headers/Header1";
import Header1Container from "../Headers/Header1Container";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface Props  {
  cartItems: DataApi[];
  addToCart: (clickedItem: DataApi) => void;
  removeFromCart: (code: number) => void;
};

const Basket: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: DataApi[]) =>
    items.reduce(
      (ack: number, item) => ack + item.count * item.tovarOptCost,
      0
    );
  const totalCost = calculateTotal(cartItems);
  
  const [testData, setTestData]=useState<any>();
  useEffect(()=>{
    setTestData(totalCostConverted);
    localStorage.setItem("inputValue" , testData);
  })
  function resetCart(){
    localStorage.removeItem("inputValue")
  }
  let totalCostConverted = totalCost.toLocaleString("en") 
  console.log(totalCost);
  return (
    <Theme preset={presetGpnDefault}>
      <div className="basket">
        <h2>Корзина </h2>
        {cartItems.length === 0 ? <p>Корзина пуста</p> : null}
        {cartItems.map((item) => (
          <BasketItem
            key={item.code}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <div className="totalPriceDiv">
          <h3 className="totalPrice">В итоге: {totalCostConverted} руб.</h3>
        </div>
          
        <div className="basket-oformitZakaz">
          <a href="/catalog">
          <Button className="basket-oformitZakaz-btn" label="Оформить заказ" onClick={resetCart}/>
          </a>
        </div>
      </div>
    </Theme>
  );
};
export default Basket;
