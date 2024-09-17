import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Product from "./components/Products/Product";
import Riwaaz from "./components/Riwaaz/Riwaaz";
import Dazling from "./components/Dazling/Dazling"
import Vivhaa from "./components/Vivaa/Vivhaa"




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Products" element={<Product />} />
          <Route path="Riwaaz" element={<Riwaaz />} />
          <Route path="Dazling" element={<Dazling />} />
          <Route path="Vivhaa" element={<Vivhaa/>} />
          
        </Route>
      </Routes>
    </Router>
  );
}
