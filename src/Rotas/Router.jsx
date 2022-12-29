import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Digidex from "../Digidex/Digidex";
import HomePage from "../HomePage/HomePage";

const Router = () => {


  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/digidex" element={<Digidex/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default Router