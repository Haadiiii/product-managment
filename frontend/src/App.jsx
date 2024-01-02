import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./container/MainPage";
import Navbar from "./container/Navbar";
import Listing from "./container/Listing";

const App = () => {
  return (
    <BrowserRouter>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
