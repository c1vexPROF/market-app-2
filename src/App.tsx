import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./Mains/Main1Container";
import Akcii from './Akcii/Akcii'
import News from './News/News'
import CatalogContainer from "./Catalog/CatalogContainer";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/mainpage"
            element={<MainContainer/>}
          />
          <Route
            path="/catalog"
            element={<CatalogContainer empty={undefined} />}
          />
          <Route
            path="/akcii"
            element={<Akcii/>}
          />
          <Route
            path="/news"
            element={<News/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
