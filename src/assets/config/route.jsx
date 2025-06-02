import React from "react";
import { Route, Routes } from "react-router-dom";
import App from './App.jsx'
const AppRoutes=()=>{
    return(
        <Routes>
              <Route path='/chat' element={<h1>hello</h1>}/>
              <Route path='/' element={<App />}/>
            </Routes>
    );
};