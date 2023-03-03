import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import People from "../pages/People";
import Sports from "../pages/Sports";

const AnimatedRoutes = () => {
  const location = useLocation();


  return (
    <AnimatePresence>
      
      
    <Routes location={location} key={location.pathname}>

      <Route
        element={<Home/>}
        path='/'
      />
      <Route
        element={<Contact/>}
        path='/contact'
      />
      <Route
        element={<About/>}
        path='/about'
      />
      <Route
        element={<People/>}
        path='/people'
      />
      <Route
        element={<Sports/>}
        path='/sports'
      />

    </Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoutes;