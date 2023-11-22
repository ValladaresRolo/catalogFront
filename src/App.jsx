import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Catalogo } from "./pages/Catalogo"
import { BikeDetail } from "./pages/BikeDetail"
import { Login } from "./pages/Login"
import { Footer } from "./components/Footer"
import { Container } from "react-bootstrap"
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { AuthForm } from "./pages/AuthForm"


function App() {


  const [catalogs, setCatalogs] = useState([])

  const getCatalogs = async () => {
    const resp = await axios.get('https://api-server-ascm.onrender.com/v1/catalog')
    console.log(resp.data)
    setCatalogs(resp.data.detail)
  }
  useEffect(() => {
    getCatalogs()
  }, [])



  return (
    <>

      <NavBar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/bikes/:sku" element={<BikeDetail />} />
          <Route path="/login" element={<AuthForm />} />

        </Routes>

        <ul>
          <p>hhhh</p>
          {catalogs.map(catalog => (
            <li key={catalog._id}>{catalog.model}</li>
          ))}
        </ul>


      </Container>
      <Footer />




    </>
  )
}
export default App
