import React, { useState, useEffect } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import Header1Container from "../Headers/Header1Container";
import "../styles/akcii.scss";


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
