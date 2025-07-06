import React from 'react'
import Header from './static/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invest from "./pages/Invest"
import Stories from "./pages/Stories"
import FAQs from "./pages/FAQs"
import Piggybank from './pages/Piggybank';
import Home from './pages/Home'
import Safelock from './pages/Safelock';
import Targetsavings from './pages/Targetsavings';
import Flexnaira from './pages/Flexnaira'
import Flexdollar from './pages/Flexdollar'
import House from './pages/House'
import Shop from './pages/Shop'
import Newsletter from './pages/Newsletter'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/invest" element={<Invest/>}/>
          <Route path="/stories" element={<Stories/>}/>
          <Route path="/faqs" element={<FAQs/>}/>
          <Route path="/piggybank" element={<Piggybank/>}/>
          <Route path="/safelock" element={<Safelock/>}/>
          <Route path="/targetsavings" element={<Targetsavings/>}/>
          <Route path="/flexnaira" element={<Flexnaira/>}/>
          <Route path="/flexdollar" element={<Flexdollar/>}/>
          <Route path="/house" element={<House/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/newsletter" element={<Newsletter/>}/>

          
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App