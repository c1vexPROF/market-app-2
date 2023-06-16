import React, { Component, useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import qs from "qs";
import "../styles/main1.scss";
import { createBrowserHistory } from "history";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Button } from "@consta/uikit/Button";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { TextField } from "@consta/uikit/TextField";
import axios from "axios";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import Tovar from "../Tovar/Tovar";
import Header1Container from "../Headers/Header1Container";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface DataApi {
  code: number;
  tovarName: string;
  tovarShortAbout: string;
  tovarBaseCost: string;
  tovarOptCost: string;
  tovarBrand: string;
  tovarAvatar: string;
  menu: string;
  data: string;
  count: number;
}

interface BasketData  {
  tovarCode: string;
  count: string;
  empty:any;

  dataTovars: any;
  img:any;
};

export default function Main1(props: OneOfObject<BasketData>) {
  const [test2, setTest2] = useState<any>(undefined);
  const [test1, setTest1] = useState<any>(undefined);
  const instance = axios.create({
    baseURL: "https://diplom.foxworld.online/",
  });
  const api = {
    getTest() {
      return instance.get("main/tovars");
    },
    getBasket() {
      return instance.get("main/basket");
    },
    postTest() {
      return instance.post("main/basket");
    },
  };
  //action
  const getTestAction = () => {
    return api.getTest();
  };
  const getBasketAction = () => {
    return api.getBasket();
  };
  //container simulator
  let getTestContainer = async () => {
    let dataTest: any = await getTestAction();
    let dataTestConverted = dataTest?.data;
    setTest1(dataTestConverted);
  };
  let getBasketContainer = async () => {
    let dataTestBasket: any = await getBasketAction();
    // let dataTestBasketConverted = dataTestBasket?.data;
    setTest2(dataTestBasket);
  };
  useEffect(() => {
    getTestContainer();
    getBasketContainer();
  }, []);
  // let getDataToConsole = () => {
  //   console.log(test2);
  // };
  // function postTestFunc() {
  //   axios
  //     .post("https://diplom.foxworld.online/main/basket", {
  //       tovarCode: "74781cf7-afdf-4730-875f-2c643de672b0",
  //       count: 2,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }

  return (
    <div className="main1">
      <Header1Container nothing={undefined} />
      <div className="main1-slider">
        <Slider />
      </div>
      <Theme preset={presetGpnDefault}>
      <div className="tovarRow">
        {props?.dataTovars?.data?.map((e: any) => (
          <div className="tovar" key={e.code}>
            <div className="tovar-div">
              <div className="tovar-div-img">
                <img className="tovar-div-img-1" height={450} src={props.img} />
              </div>
              <div className="tovar-div-data">
                <h3>{e.tovarName}</h3>
                <span>{e.tovarShortAbout}</span>
              </div>
              <div className="tovar-div-btnAndCost">
                <div className="text">
                  <span className="text-BaseCost">
                    <span>{e.tovarBaseCost}</span>руб.
                  </span>
                  <span className="text-OptCost">
                    <span>{e.tovarOptCost}</span>руб.
                  </span>
                </div>
                <div className="tovar-div-btn">
                  <Button
                    className="tovar-div-btnAndCost-button"
                    label="Добавить в корзину"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Theme>
      <div>
      </div>
    </div>
  );
}
