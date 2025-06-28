import React from 'react'
import Header from './static/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invest from "./pages/Invest"
import Stories from "./pages/Stories"
import FAQs from "./pages/FAQs"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/invest" element={<Invest/>}/>
          <Route path="/stories" element={<Stories/>}/>
          <Route path="/faqs" element={<FAQs/>}/>
          
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App