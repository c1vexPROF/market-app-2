import React, { useEffect, useState } from "react";
import Header1 from "./Header1";
import "../styles/main1.scss";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

interface Props {
  // setCartOpen: (open: boolean) => void;
  cartOpen: boolean;
  cartItems: any;
  removeFromCart: any;
  addToCart: any;
  totalCostInHeader: any;
  setCartOpen: (open: boolean) => void;
  nothing:any;
}

function Header1Container(props: OneOfObject<Props>) {
  return (
    <Header1
      cartItems={props.cartItems}
      addToCart={props.addToCart}
      removeFromCart={props.removeFromCart}
      totalCostInHeader={props.totalCostInHeader}
    />
  );
}
// export default compose(connect<PropsTest, OwnPropsType>);
export default Header1Container;
