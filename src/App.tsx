import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./Mains/MainContainer";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/main"
            element={<MainContainer test1={undefined} test2={undefined} match={"/main"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
