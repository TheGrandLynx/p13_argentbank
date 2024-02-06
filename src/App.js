import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import "./styles/main.scss";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
