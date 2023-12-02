import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'




export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <Image style={{ width: "200px", height: "100px" }} src="https://res.cloudinary.com/dhghhzrkl/image/upload/v1701451226/ReactBike/Recurso1_vqwb9n.svg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={'/catalogo'} >Catalogo</Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/perfil'}>Editar Perfil</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>Ingresar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}