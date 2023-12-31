import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { LogoutLink } from './LogOut'
import { useUser } from '../context/UserContext'

export const NavBar = () => {
    const { user } = useUser()
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to={'/catalogFront/'}>
                    <Image style={{ width: "200px", height: "100px" }} src="https://res.cloudinary.com/dhghhzrkl/image/upload/v1701451226/ReactBike/Recurso1_vqwb9n.svg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/catalogFront/'}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={'/catalogFront/catalogo'} >Catalogo</Nav.Link>


                    </Nav>


                    <Nav>
                        <Nav.Link as={Link} to={'/catalogFront/login'}>Ingresar</Nav.Link>

                        {user && <>
                            <Nav.Link as={Link} to={'/catalogFront/perfil'}>Editar Perfil</Nav.Link>
                            <LogoutLink />
                        </>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}