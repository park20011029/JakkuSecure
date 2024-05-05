import logo from './logo.svg';
import './App.css';
import Topbar from "./pages/Topbar";
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation, BrowserRouter} from 'react-router-dom';
import SelectItem from "./pages/selectItem";
import Footer from "./components/Footer";
import Bucket from "./pages/Bucket";


function App() {
  return (
      <>
        <Topbar/>
        <BrowserRouter>
          <Routes>
              <Route path="/categori" element={<SelectItem/>}/>
              <Route path="/bucket" element={<Bucket/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
  );
}

export default App;
