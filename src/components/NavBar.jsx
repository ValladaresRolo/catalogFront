import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={'/catalogo'} >Catalogo</Nav.Link>
                        <Nav.Link as={Link} to={'/perfil'}>Editar Perfil</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>Ingresar</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}