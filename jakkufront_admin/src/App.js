import './App.css';
import Topbar from "./pages/Topbar";
import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import Itemlist from "./pages/Itemlist";
import Login from "./pages/Login"
import Footer from "./pages/Footer";
import PickUp from "./pages/PickUp";
import { RecoilRoot } from "recoil";
import Modal from "./components/Adminmodal";
import React from "react";



function App() {
    return (
        <RecoilRoot>
            <Modal/>
            <BrowserRouter>
                <AppContent/>
            </BrowserRouter>
        </RecoilRoot>
    );
}
function AppContent() {
    const location = useLocation();
    const isLoginPage1 = location.pathname === "/";
    const isLoginPage2 = location.pathname === "/signup";

    return (
        <>
            {(!isLoginPage1 && !isLoginPage2) && (
                <Topbar/>
            )}
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/list" element={<Itemlist/>}/>
                <Route path="/pickup" element={<PickUp/>}/>
            </Routes>
            {(!isLoginPage1 && !isLoginPage2) && (
                <Footer/>
            )}
        </>
    );
}

export default App;
