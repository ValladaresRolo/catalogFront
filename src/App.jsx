import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Catalogo } from "./pages/Catalogo"
import { BikeDetail } from "./pages/BikeDetail"
import { Footer } from "./components/Footer"
import { Container } from "react-bootstrap"

import React from 'react';
import { AuthForm } from "./pages/AuthForm"
import { UserProvider } from "./context/UserContext"



function App() {

  return (
    <>

      <NavBar />

      <Container>
        <UserProvider>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalogo" element={<Catalogo />} />
            <Route path="/bikes/:sku" element={<BikeDetail />} />
            <Route path="/login" element={<AuthForm />} />

          </Routes>
        </UserProvider>
        <ul>

        </ul>


      </Container>
      <Footer />




    </>
  )
}
export default App
