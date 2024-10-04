import { BrowserRouter, Route, Routes } from "react-router-dom"
import Beranda from "./pages/beranda/Beranda1"
import Profil from "./pages/Profil"
import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import Detail from "./pages/Detail"
import Error from "./pages/Error"
import './App.css'
import './assets/Stylebaru.scss'
import Product from "./pages/product/Product"
import Rincian from "./pages/Rincian"
import Beranda1 from "./pages/beranda/Beranda1"
import Negara from "./pages/negara/Negara"
import Rinciann from "./pages/Rinciann"
import NegaraView from "./pages/negara/Negaraview"
import ThemeContext from "./components/context/ThemeContext"
import { useState } from "react"




function App() {

  const theme= useState("light")

  return (
   <BrowserRouter>
   <ThemeContext.Provider value={theme}>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Beranda1/>}/>
    <Route path='/Profil'  element={<Profil/>}/>
    <Route path='/Detail/:id'  element={<Detail/>}/>
    <Route path="/Product" element={<Product />} />
    <Route path="/Product" element={<Product />} />
    <Route path="/Rincian/:id" element={<Rincian />} /> {/* Product detail route */}
    <Route path="/Negara" element={<Negara/>} />
    <Route path="/NegaraView" element={<NegaraView/>} />
    <Route path="/Rinciann/:id" element={<Rinciann/>} />


    <Route path='*'  element={<Error/>}/>
   </Routes>
   </ThemeContext.Provider>
   </BrowserRouter>
  )
}

export default App