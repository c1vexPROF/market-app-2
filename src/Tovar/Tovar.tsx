import { Button } from "@consta/uikit/Button";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { DataApi } from "../Catalog/Catalog";
import { useStoredData } from "../useLocalStorage/useLocalStorage";
import "../styles/tovar.scss";
import { Layout } from "@consta/uikit/Layout";
import paper from '../images/paper.jpg'
import React, { useState, useEffect } from "react";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
  interface Props  {
  empty:any;
  item: DataApi;
  itemImg: any;
  handleAddToCart: (clickedItem: DataApi) => void;
};
const Tovar: React.FC<Props> = ({ item, handleAddToCart, itemImg }) => (
  <Theme preset={presetGpnDefault}>
    <div className="tovar">
      <div className="tovar-div">
        <div className="tovar-div-img">
          <img className="tovar-div-img-1" height={450} src={itemImg}/>
        </div>
        <div className="tovar-div-data">
          <h3>{item.tovarName}</h3>
          <p>{item.tovarShortAbout}</p>
        </div>
        <div className="tovar-div-btnAndCost">
          <div className="text">
          <span className="text-BaseCost">{item.tovarBaseCost} руб.</span>
          <span className="text-OptCost">{item.tovarOptCost} руб.</span>
          </div>
          <div className="tovar-div-btn">
            <Button
              className="tovar-div-btnAndCost-button"
              onClick={() => {handleAddToCart(item) }}
              label="Добавить в корзину"
            />
          </div>
        </div>
      </div>
    </div>
  </Theme>
);
export default Tovar;
