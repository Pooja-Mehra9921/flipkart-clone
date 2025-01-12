import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./src/pages/LoginPage";
import HomePage from "../flipkart-clone/src/pages/HomePage"


const App =()=>{
    return(
<>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
};

export default App;