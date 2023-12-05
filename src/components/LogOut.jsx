import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export const LogoutLink = () => {
    const { setUser, setToken } = useUser()
    const navigate = useNavigate()

    const handleLogout = () => {
        // Limpiar el estado del usuario
        setUser(null)
        setToken(null)

        // Redirigir al usuario a la página de inicio
        navigate('/catalogFront/')
    }
    return (
        <Nav.Link onClick={handleLogout} as={Link} to={'/catalogFront'}>
            Cerrar sesión
        </Nav.Link>

    )

}

export const LogoutButton = () => {
    const { setUser, setToken } = useUser()
    const navigate = useNavigate()

    const handleLogout = () => {
        // Limpiar el estado del usuario
        setUser(null)
        setToken(null)

        // Redirigir al usuario a la página de inicio
        navigate('/catalogFront/')
    }

    return (
        <Button onClick={handleLogout}>
            Cerrar sesión
        </Button>
    )
}
