import React, { useState, useEffect } from "react";
import "../styles/header1.scss";
import logo from "../images/logo-market.png";
import busketLogo from "../images/busketLogo.png";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { Modal } from "@consta/uikit/Modal";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import sakha from "../images/sakha.png";
import rus from "../images/rus.png";
import Catalog, { DataApi } from "../Catalog/Catalog";
import Basket from "../Basket/Basket";
import { useStoredData } from "../useLocalStorage/useLocalStorage";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface Props {
  cartItems: any;
  addToCart: any;
  removeFromCart: any;
  totalCostInHeader: any;
}

export default function Header1(props: OneOfObject<Props>) {


  const [cartOpen, setCartOpen] = useState(false);

  const [value, setValue] = useState<string | null>(null);
  const handleChange = ({ value }: { value: string | null }) => setValue(value);

  const [totalCostShow, setTotalCostShow]=useState<any>();
  useEffect(()=>{
    setTotalCostShow(localStorage.getItem("inputValue"))
  })

  return (
    <Theme preset={presetGpnDefault}>
      {/* <div>
        <Button
          onClick={() => {
            setCartStore(props.cartItems);
          }}
          label="сохранить/сбросить корзину"
        />
      </div> */}
      <div>
        {/* <p>Сохраненные:</p> */}
        {/* <p>{cartStore?.map(cartStore=><div>{cartStore.code}</div>)}</p> */}
      </div>
      <Modal
        className=""
        isOpen={cartOpen}
        hasOverlay={false}
        onClickOutside={() => setCartOpen(false)}
        onEsc={() => {
          setCartOpen(false);
        }}
      >
        <Basket
          cartItems={props.cartItems}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      </Modal>

      <div className="header1">
        <div className="header1-div">
          <a href="/mainpage">
            <div className="header1-div-logo">
              <img src={logo} />
            </div>
          </a>
          <div className="header1-div-searcher">
            <TextField
              className="header1-div-searcher-field"
              onChange={handleChange}
              value={value}
              type="text"
              placeholder="Введите запрос"
            />
            <Button onlyIcon iconLeft={IconSearchStroked} />
          </div>
          <div className="header1-div-info">
            <div className="header1-div-info-1">
              <p className="header1-div-info-1-1">Почта:</p>
              <p className="header1-div-info-1-2">info@bookmk.ru</p>
            </div>
            <div className="header1-div-info-2">
              <p className="header1-div-info-2-1">Горячая линия:</p>
              <p className="header1-div-info-2-2">8(4112) 741-423</p>
            </div>
          </div>
          <div className="header1-div-busket">
            <div className="header1-div-busket-buttons">
              <Button
                label="Корзина"
                className="header1-div-busket-buttons-btn"
                form="defaultBrick"
                // iconRight=""
                onClick={() => {
                  setCartOpen(true);
                }}
              />
              <Button
                label={totalCostShow ? totalCostShow + " руб." : "0" + " руб."} 
                className="header1-div-busket-buttons-btn"
                // iconRight=""
                form="brickDefault"
                onClick={() => {
                  setCartOpen(true);
                }}
              />
            </div>
          </div>
          <div className="header1-div-language">
            <div className="header1-div-language-btn">
              <img src={rus} height={40}></img>
            </div>
            <div className="header1-div-language-btn">
              <img src={sakha} height={40}></img>
            </div>
          </div>
        </div>
        <div className="header1-div-2level">
          <a href="/catalog">
            <div className="header1-div-2level-catalog">
              <Button
                label="Каталог"
                form="default"
                className="header1-div-2level-catalog-btn"
                iconRight={IconHamburger}
              />
            </div>
          </a>
          <div className="header1-div-2level-btns">
            <a href="/akcii">
              <Button
                label="Акции"
                form="default"
                className="header1-div-2level-btns-btn"
              />
            </a>
            <Button
              label="Вакансии"
              form="default"
              className="header1-div-2level-btns-btn"
            />
            <Button
              label="Оплата/Доставка"
              form="default"
              className="header1-div-2level-btns-btn"
            />
            <a href="/news">
              <Button
                label="Новости"
                form="default"
                className="header1-div-2level-btns-btn"
              />
            </a>
            <Button
              label="Покупателям"
              form="default"
              className="header1-div-2level-btns-btn"
            />
          </div>
        </div>
      </div>
    </Theme>
  );
}
