import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Catalogo } from "./pages/Catalogo"
import { BikeDetail } from "./pages/BikeDetail"


function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/bikes/:sku" element={<BikeDetail />} />
      </Routes>

    </>
  )
}
export default App
