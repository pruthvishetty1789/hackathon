import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import UserLogin from "./components/UserLogin";
import DoctorLogin from "./components/DoctorLogin";
import Register from "./components/Register";
import FooterComponent from "./components/Footer";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
