import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/About';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<App />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
