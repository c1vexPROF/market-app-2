import React, { Component } from "react";
import Slider from "../Slider/Slider";
import "../styles/main1.scss";

type Props={
    test1:any;
    test2:any;
};
const columns:any=[
    {
        name: "name",
        shortAbout: "shortAbout",
        cost: "cost",
        optCost: "optCost",
        avatar: "avatar",
        menu:  "menu",
        brand: "brand"
    }]

export default function Main1(props: Props) {
  return (
    <div className="main1">
      <div className="main1-slider">
        <Slider />
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
