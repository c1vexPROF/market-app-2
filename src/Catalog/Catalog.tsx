import React, { Component, useState, useEffect } from "react";
import { Button } from "@consta/uikit/Button";
import { Text } from "@consta/uikit/Text";
import { TextField } from "@consta/uikit/TextField";
import { useQuery } from "react-query";
import Tovar from "../Tovar/Tovar";
import { GridItem, Grid } from "@consta/uikit/Grid";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
// import Header1 from "../Headers/Header1";
import { click } from "@testing-library/user-event/dist/click";
import MainContainer from "../Mains/Main1Container";
import axios from "axios";
import "../styles/catalog.scss";
import CatalogContainer from "./CatalogContainer";
import Header1Container from "../Headers/Header1Container";


export type DataApi = {
  code: number;
  tovarName: string | undefined;
  tovarShortAbout: string | undefined;
  tovarBaseCost: number;
  tovarOptCost: number;
  tovarBrand: string | undefined;
  tovarAvatar: string | undefined;
  menu: string | undefined;
  data: string | undefined;
  count: number;
};

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface Props  {
  totalCostInHeaderByCatalog:any;
  empty:any;
}

const getProducts = async (): Promise<DataApi[]> =>
  await (await fetch("https://diplom.foxworld.online/main/tovars")).json();

export default function Catalog(props: OneOfObject<Props>) {
  const [img, setImg] = useState<any>(undefined);

  async function getImage() {
    let response = await fetch("https://diplom.foxworld.online/repo/get/screen-3.jpg");
    let blob = await response.blob();
    let blobConverted = URL.createObjectURL(blob)
    setImg(blobConverted);
  }

  useEffect(() => {
    localStorage.getItem('inputValue')
    getImage();
  }, []);

  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as DataApi[]);

  const { data, isLoading, error } = useQuery<DataApi[]>(
    "products",
    getProducts
  );

  // const getTotalItems = (items: DataApi[]) =>
  //   items.reduce((ack: number, item) => ack + item.count, 0);

  const handleAddToCart = (clickedItem: DataApi) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.code === clickedItem.code);
      if (isItemInCart) {
        return prev.map((item) =>
          item.code === clickedItem.code
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, count: 1 }];
    });
  };
  const handleRemoveFromCart = (code: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.code === code) {
          if (item.count === 1) return ack;
          return [...ack, { ...item, count: item.count - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as DataApi[])
    );
  };
  // const convertToStored = () => {}; 

  return (
    <Theme preset={presetGpnDefault}>
      <Header1Container
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
        setCartOpen={setCartOpen}
        cartOpen={cartOpen}
        cartItems={cartItems} 
        totalCostInHeader={props.totalCostInHeaderByCatalog}
        />
      <div>
        <div>
          <h2 className="textCatalog">Каталог товаров:</h2>
          {/* {catalogTovars.map((catalogTovars:DataApi)=><div>{catalogTovars.tovarName}</div>)} */}
          <div className="tovarRow">
            {data?.map((item) => (
              <div key={item.code} className="tovarRow-tovar" >
                {/* <p key={item.code}>
                    <Button
                      label={item.tovarName}
                      onClick={handleAddToCart}
                    ></Button>
                  </p> */}
                  
                <Tovar
                  empty={undefined}
                  itemImg={img}
                  item={item}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Theme>
  );
}
