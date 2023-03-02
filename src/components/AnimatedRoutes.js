import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'
import Home from "../pages/Home";
import Contact from "../pages/Contact";

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

    </Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoutes;