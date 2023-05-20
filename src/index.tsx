import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/Montserrat/Montserrat-Regular.ttf';
import Header1 from './Headers/Header1';
import Main1 from './Mains/Main1';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';  
// import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Header1/>
    <Main1 test1={undefined} test2={undefined}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
