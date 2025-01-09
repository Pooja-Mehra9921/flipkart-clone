import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./src/pages/LoginPage";


const App =()=>{
    return(
<>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
        this is a app fil
        </>
    )
};

export default App;