import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messages from "./components/Messages/Messages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path={"/profile"} element={<Profile />} />
          </Routes>
          <Routes>
            <Route path={"/messages"} element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
