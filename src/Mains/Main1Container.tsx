import React, { useEffect, useState } from "react";
import Main1 from "./Main1";
import "../styles/main1.scss";
import axios from "axios";
import CatalogContainer from "../Catalog/CatalogContainer";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface T {
  empty:undefined;
  data1:any;
}

function MainContainer() {
  const [tovar, setTovar] = useState<any>(undefined);
  const [img, setImg] = useState<any>(undefined);
  //api
  const instance = axios.create({
    baseURL: "https://diplom.foxworld.online/",
  });
  const api = {
    getTovar() {
      return instance.get("main/tovars");
    },
  };

  //action
  const getTovarAction = () => {
    return api.getTovar();
  };
  let getTovarContainer = async () => {
    let dataTovar: any = await getTovarAction();
    setTovar(dataTovar);
  };
  useEffect(() => {
    getTovarContainer();
    getImage();
  }, []);

  async function getImage() {
    let response = await fetch("https://diplom.foxworld.online/repo/get/screen-3.jpg");
    let blob = await response.blob();
    let blobConverted = URL.createObjectURL(blob)
    setImg(blobConverted);
  }
  return <Main1 empty={undefined} dataTovars={tovar} img={img} />;
}
// export default compose(connect<PropsTest, OwnPropsType>);
export default MainContainer;
