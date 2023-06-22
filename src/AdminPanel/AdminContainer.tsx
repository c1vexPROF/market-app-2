import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/admin.scss";
import Admin from './Admin';


type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface T {
  empty: undefined;
  data1: any;
}

export default function MainContainer(props: OneOfObject<T>) {
  const [tovar, setTovar] = useState<any>(undefined);
  const [img, setImg] = useState<any>(undefined);

  const instance = axios.create({
    baseURL: "https://diplom.foxworld.online/",
  });
  const api = {
    getTovar() {
      return instance.get("main/tovars");
    },
  };
  const getTovarAction = () => {
    return api.getTovar();
  };
  let getTovarContainer = async () => {
    let dataTovar: any = await getTovarAction();
    setTovar(dataTovar);
  };

  async function getImage() {
    let response = await fetch(
      "https://diplom.foxworld.online/repo/get/screen-3.jpg"
    );
    let blob = await response.blob();
    let blobConverted = URL.createObjectURL(blob);
    setImg(blobConverted);
  }

  useEffect(() => {
    getTovarContainer();
    getImage();
  }, []);

  return (
    <div>
      <Admin empty={undefined} dataTovars={tovar} img={img}/>
    </div>
  );
}
