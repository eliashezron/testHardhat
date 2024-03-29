import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider 
    appId="fpV6gOf2DBVPelzeXHevT0gO8S0bDMa6zDmWupPm"
    serverUrl="https://5zenrjqoogkm.usemoralis.com:2053/server"
  >
    <App />
  </MoralisProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
