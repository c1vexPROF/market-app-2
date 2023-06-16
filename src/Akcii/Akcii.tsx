import React, { useState, useEffect } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import Header1Container from "../Headers/Header1Container";
import "../styles/akcii.scss";
import akciya1 from "../images/akciya1.jpg";
import akciya2 from "../images/akciya2.jpg";
import akciya3 from "../images/akciya3.jpg";
import akciya4 from "../images/akciya4.jpg";
import akciya5 from "../images/akciya5.jpg";
import akciya6 from "../images/akciya6.jpg";
import akciya7 from "../images/akciya7.jpg";
import akciya8 from "../images/akciya8.jpg";



export default function Akcii() {
  return (
    <Theme preset={presetGpnDefault}>
      <Header1Container nothing={undefined} />
      <div>
        <h1 className="text-akcii">Наши акции:</h1>
      </div>
      <div className="akcii">
        <div className="akcii-1">
        </div>
        <div className="akcii-2">
        </div>
        <div className="akcii-3">
        </div>
      </div>
      <div className="akcii">
        <div className="akcii-4">
        </div>
        <div className="akcii-5">
        </div>
        <div className="akcii-6">
        </div>
      </div>
    </Theme>
  );
}
