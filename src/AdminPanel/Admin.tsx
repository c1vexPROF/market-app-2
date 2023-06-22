import React, { useEffect, useState } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Table } from "@consta/uikit/Table";
import { Button } from "@consta/uikit/Button";
import { Modal } from "@consta/uikit/Modal";
import { TextField } from "@consta/uikit/TextField";
import "../styles/admin.scss";
import axios from "axios";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface T {
  dataTovars: any;
  empty: any;
  img: any;
}

function Admin(props: OneOfObject<T>) {
  useEffect(() => {
    getImage();
  }, []);
  const columns: any = [
    {
      title: "Название товара",
      accessor: "tovarName",
    },
    {
      title: "Изображение товара",
      renderCell: (q: any) => (
        <div>
          <img src={img} />
        </div>
      ),
    },
    {
      title: "Обычная стоимость",
      accessor: "tovarBaseCost",
    },
    {
      title: "Оптовая стоимость",
      accessor: "tovarOptCost",
    },
    {
      title: "Краткое описание",
      accessor: "tovarShortAbout",
    },
  ];

  const [img, setImg] = useState<any>(undefined);
  const [windowOpen, setWindowOpen] = useState(false);
  const [error, setError] = useState(false);
  const [imgPreview, setImgPreview] = useState(null);
  const [post, setPost] = useState({
    tovarName: "",
    tovarImg: "",
    tovarBaseCost: "",
    tovarOptCost: "",
    tovarShortAbout: "",
  });
  function handleSubmit(t: any) {
    // t.preventDefault();
    // axios
    //   .post("https://diplom.foxworld.online/admin/tovar", { post })
    //   .then((response) => console.log(response));
    setImgPreview(null);
    setWindowOpen(false);
  }
  const handleInput = (t: any) => {
    setPost({ ...post, [t.target.name]: t.target.value });
    console.log(post);
  };
  async function getImage() {
    let response = await fetch(
      "https://diplom.foxworld.online/repo/get/screen-3.jpg"
    );
    let blob = await response.blob();
    let blobConverted = URL.createObjectURL(blob);
    setImg(blobConverted);
  }
  const handleImageChange = (e: any) => {
    setError(false);
    const selected = e.target.files[0];
    const imageType = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && imageType.includes(selected.type)) {
      let reader: any = null;
      reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };
  const importToDB = (r: any) => {
    alert("Данные сохранены");
    setWindowOpen(false);
  };
  console.log(imgPreview);

  return (
    <Theme preset={presetGpnDefault}>
      <div className="admin">
        <Button
          className="table-div-btn"
          label="Добавить контакт"
          view="secondary"
          onClick={() => {
            setWindowOpen(true);
          }}
        />
        <Modal
          isOpen={windowOpen}
          hasOverlay={false}
          onClickOutside={() => setWindowOpen(false)}
          onEsc={() => {
            setWindowOpen(false);
          }}
          className="modalwindow"
        >
          <form>
            <input
              type="text"
              onChange={handleInput}
              placeholder="Название товара"
              name="tovarName"
            />
            <div className="modal-contacts-window-image">
              <div className="modal-contacts-img">
                <div className="modal-contacts-img-btn">
                  <div
                    className={
                      imgPreview ? "modal-contacts-img-btn-path" : "btn-test"
                    }
                  >
                    {!imgPreview ? (
                      <>
                        <label
                          htmlFor="fileUpload"
                          className="customFileUpload"
                        >
                          Выбрать изображение
                        </label>
                        <input
                          type="file"
                          id="fileUpload"
                          onChange={handleImageChange}
                          name="tovarImg"
                        />
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div
                    className="admin-modal-img"
                    style={{ backgroundImage: `url("${imgPreview}")` }}
                  ></div>
                  {imgPreview ? (
                    <Button
                      className="customFileUpload"
                      onClick={() => setImgPreview(null)}
                      label="Удалить изображение"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <input
              type="text"
              onChange={handleInput}
              name="tovarBaseCost"
              placeholder="Стандартная цена"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              onChange={handleInput}
              name="tovarOptCost"
              placeholder="Оптовая цена"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              onChange={handleInput}
              name="tovarShortAbout"
              placeholder="Краткое описание"
            />
            <br></br>
            <br></br>
          </form>
          <div>
            <Button
              className="modal-contacts-window-btns-div-btn-3"
              label="Добавить товар"
              view="primary"
              onClick={handleSubmit}
            />
          </div>
        </Modal>
        <p>
          {props.dataTovars ? (
            <div>
              <Table columns={columns} rows={props?.dataTovars?.data} />
            </div>
          ) : (
            "Данные грузятся"
          )}
        </p>
      </div>
    </Theme>
  );
}
export default Admin;
