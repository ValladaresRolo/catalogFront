import { Button } from 'react-bootstrap'
import { useUser } from '../context/UserContext'
import { LogoutButton } from '../components/LogOut'

export const UserProfile = () => {
    const { user } = useUser()

    // Asegúrate de que el usuario esté definido antes de intentar acceder a sus propiedades
    if (!user) {
        return <p>No hay ningún usuario registrado.</p>
    }

    console.log(user);

    return (
        <div>
            <h1>Perfil del Usuario</h1>
            <p>Nombre: {user.firstName}</p>
            <p>Apellido: {user.lastName}</p>
            <p>Email: {user.mail}</p>


            <LogoutButton />
        </div>
    )
}
