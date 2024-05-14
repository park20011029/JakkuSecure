import './App.css';
import Topbar from "./pages/Topbar";
import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import SelectItem from "./pages/selectItem";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./pages/Footer";
import Bucket from "./pages/Bucket";
import Buylist from "./pages/Buylist";
import { RecoilRoot } from "recoil";
import Modal from "./components/Usermodal";
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
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/categori" element={<SelectItem/>}/>
                <Route path="/bucket" element={<Bucket/>}/>
                <Route path="/buylist" element={<Buylist/>}/>
            </Routes>
            {(!isLoginPage1 && !isLoginPage2) && (
                <Footer/>
            )}
        </>
    );
}

export default App;
