import React, { useState } from "react";
import "../styles/header1.scss";
import logo from "../images/logo-market.png";
import busketLogo from "../images/busketLogo.png";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import sakha from "../images/sakha.png";
import rus from "../images/rus.png";

export default function Header1() {
  const [value, setValue] = useState<string | null>(null);
  const handleChange = ({ value }: { value: string | null }) => setValue(value);

  return (
    <Theme preset={presetGpnDefault}>
      <div className="header1">
        <div className="header1-div">
          <div className="header1-div-logo">
            <img src={logo} />
          </div>
          <div className="header1-div-searcher">
            <TextField
              className="header1-div-searcher-field"
              onChange={handleChange}
              value={value}
              type="text"
              placeholder="Одна строчка"
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
              />
              <Button
                label="570 руб."
                className="header1-div-busket-buttons-summ"
                form="brickDefault"
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
          <div className="header1-div-2level-catalog">
            <Button
              label="Каталог"
              form="default"
              className="header1-div-2level-catalog-btn"
              iconRight={IconHamburger}
            />
          </div>
          <div className="header1-div-2level-btns">
            <Button
              label="Акции"
              form="default"
              className="header1-div-2level-btns-btn"
            />
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
            <Button
              label="Новости"
              form="default"
              className="header1-div-2level-btns-btn"
            />
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
