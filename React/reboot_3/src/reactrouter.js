import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import BackgroundImage from "./Backgroundimage";//background image file as background page
import MyComponent2 from "./Crud";//crud page to link the page 
const App2=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BackgroundImage/>}/>
            <Route path="/crud" element={<MyComponent2/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App2;