import React from 'react';
import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Catalogo } from "./pages/Catalogo"
import { BikeDetail } from "./pages/BikeDetail"
import { Footer } from "./components/Footer"
import { Container } from "react-bootstrap"
import { AuthForm } from "./pages/AuthForm"
import { UserProvider } from "./context/UserContext"
import { UserProfile } from './authorization/perfil'
import { Failure } from './pages/failure';



function App() {

  return (
    <>
      <UserProvider>
        <NavBar />

        <Container>


          <Routes>
            <Route path="/catalogFront/" element={<Home />} />
            <Route path="/catalogFront/Catalogo" element={<Catalogo />} />
            <Route path="/catalogFront/bikes/:sku" element={<BikeDetail />} />
            <Route path="/catalogFront/login" element={<AuthForm />} />
            <Route path="/catalogFront/perfil" element={<UserProfile />} />
            <Route path="/catalogFront/failure" element={<Failure />} />

          </Routes>

          <ul>

          </ul>


        </Container>
        <Footer />
      </UserProvider >




    </>
  )
}
export default App
