import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Catalogo } from "./pages/Catalogo"
import { BikeDetail } from "./pages/BikeDetail"
import { Login } from "./pages/Login"
import { Footer } from "./components/Footer"
import { Container } from "react-bootstrap"


function App() {
  return (
    <>

      <NavBar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/bikes/:sku" element={<BikeDetail />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </Container>
      <Footer />

    </>
  )
}
export default App
