import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import ChatPage from "../component/ChatPage";

const AppRoutes=()=>{
    return(
        <Routes>
              <Route path='/chat' element={<ChatPage />}/>
                <Route path='/about' element={<h1>about</h1>}/>
              <Route path='/' element={<App />}/>
              
            </Routes>
    );
};

export default AppRoutes;

