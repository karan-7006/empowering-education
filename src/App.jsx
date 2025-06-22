import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Empowering-Education/Pages/Home"
import AboutUs from "./Empowering-Education/Pages/AboutUs"
import ContactUs from "./Empowering-Education/Pages/ContactUs"
import Marketplace from "./Empowering-Education/Pages/MarketPlace"

function App() {

  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/MarketPlace" element={<Marketplace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}


export default App
