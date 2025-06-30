import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Empowering-Education/Pages/Home"
import AboutUs from "./Empowering-Education/Pages/AboutUs"
import ContactUs from "./Empowering-Education/Pages/ContactUs"
import Marketplace from "./Empowering-Education/Pages/MarketPlace"
import BooksDonation from "./Empowering-Education/Pages/BooksDonation"
import Login from "./Empowering-Education/Pages/Login"
import Register from "./Empowering-Education/Pages/Register"
import BookSelling from "./Empowering-Education/Pages/BookSelling"
import BooksRenting from "./Empowering-Education/Pages/BooksRenting"
import BooksPurchase from "./Empowering-Education/Pages/BooksPurchase"
import Blog from "./Empowering-Education/Pages/Blog"
import UserEdit from "./Empowering-Education/Pages/UserEdit"
import NotFound from "./Empowering-Education/Pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/MarketPlace" element={<Marketplace />} />
          <Route path="/BookDonation" element={<BooksDonation />} />
          <Route path="/BookSelling" element={<BookSelling />} />
          <Route path="/BooksRenting" element={<BooksRenting />} />
          <Route path="/BooksPurchase" element={<BooksPurchase />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/UserEdit" element={<UserEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}


export default App
