import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import FreeBook from "./Components/FreeBook";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./Components/Course";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>}/>
   
      </Routes>
    </>
  );
};

export default App;
