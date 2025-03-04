import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import reportWebVitals from './reportWebVitals';
import '../src/css/output.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
