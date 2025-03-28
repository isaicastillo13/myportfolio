import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Workflow from './components/workflow/Workflow';
import Testimonios from './components/testimonios/Testimonios';
import reportWebVitals from './reportWebVitals';
import '../src/css/output.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Hero />
      <Projects />
      <Workflow />
      <Testimonios />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
