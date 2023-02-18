import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import "./assets/scss/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  duration: 600,
  easing: "linear"
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);