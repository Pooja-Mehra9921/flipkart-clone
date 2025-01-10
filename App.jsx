import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./src/pages/LoginPage";


const App =()=>{
    return(
<>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
};

export default App;