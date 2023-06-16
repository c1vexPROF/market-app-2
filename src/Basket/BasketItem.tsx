import { Button } from "@consta/uikit/Button";

import { DataApi } from "../Catalog/Catalog";
type Props = {
  item: DataApi;
  addToCart: (clickedItem: DataApi) => void;
  removeFromCart: (code: number) => void;
};

const BasketItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div>
    <div className="basketInfo">
      <p className="tovar-Name">{item.tovarName}</p>
      <p className="tovar-Price">Цена: {Number(item.tovarOptCost).toLocaleString("en")}</p>
      <p className="tovar-allCostTovar">Итог: {Number(item.tovarOptCost * item.count).toLocaleString("en")}</p>
      <div className="buttons">
        <Button className="buttons-minus" onClick={() => addToCart(item)} label="+"/>
        <p className="itogNumber">{item.count}</p>
        <Button className="buttons-plus" onClick={() => removeFromCart(item.code)} label="-"/>
      </div>
    </div>
  </div>
);
export default BasketItem;
