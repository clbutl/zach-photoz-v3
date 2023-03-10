import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

// Categories
import Animals from "../pages/Categories/Animals";
import Street from "../pages/Categories/Street";
import Cars from "../pages/Categories/Cars";
import Nature from "../pages/Categories/Nature";

// People's
import People from "../pages/Categories/People";
import Seniors from "../pages/Categories/People/Seniors";
import Couples from "../pages/Categories/People/Couples";

// Sports
import Sports from "../pages/Categories/Sports";
import Track from "../pages/Categories/Sports/Track";
import Xc from "../pages/Categories/Sports/Xc";
import Football from "../pages/Categories/Sports/Football";
import DeziPage from "../pages/SeniorPages/Dezi";
import DefaultPage from "../pages/Default";

const AnimatedRoutes = () => {
  const location = useLocation();


  return (
    <AnimatePresence>
      
      
    <Routes location={location} key={location.pathname}>

      <Route
        element={<Home/>}
        path='*'
      />
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
        element={<Animals/>}
        path='/animals'
      />
      <Route
        element={<Street/>}
        path='/street'
      />
      <Route
        element={<Cars/>}
        path='/cars'
      />
      <Route
        element={<Nature/>}
        path='/nature'
      />

        {/* People's Routes */}
        <Route
          element={<People/>}
          path='/people'
        />

          {/* Seniors */}
          <Route
            element={<DefaultPage/>}
            path='/people/seniors'
          />

            <Route
              element={<DefaultPage/>}
              path="/people/seniors/dezi"
            />


          {/* Couples */}
          <Route
            element={<DefaultPage/>}
            path='/people/couples'
          />

        {/* Sports's Routes */}
        <Route
          element={<Sports/>}
          path='/sports'
        />
          <Route
            element={<DefaultPage/>}
            path='/sports/track'
          />


          <Route
            element={<DefaultPage/>}
            path='/sports/xc'
          />


          <Route
            element={<DefaultPage/>}
            path='/sports/football'
          />

    </Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoutes;