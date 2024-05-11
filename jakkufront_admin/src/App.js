import './App.css';
import Topbar from "./pages/Topbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import SelectItem from "./pages/selectItem";
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
          <Topbar/>
          <Routes>

          </Routes>
          <Footer/>
        </BrowserRouter>
      </RecoilRoot>
  );
}

export default App;
