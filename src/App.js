import React , { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Navbar } from "./components/Navbar"
import { NotFound } from "./pages/NotFound";
import { Footer } from './components/Footer'
import { useLocation } from 'react-router-dom';

export const App = () => {
  const [whiteTheme, setWhiteTheme] = useState(false)
  const location = useLocation();
  return (
    <div className={whiteTheme ? 'dark': ''}>
      <div className="bg-black  text-white-secondary min-h-screen dark:bg-white-pure dark:text-black phone:-mt-3">
      {/* {location.pathname !== '/' && <Navbar whiteTheme={whiteTheme} setWhiteTheme={setWhiteTheme} />} */}
      <Navbar whiteTheme={whiteTheme} setWhiteTheme={setWhiteTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>
    </div>
    
    
  );
};
