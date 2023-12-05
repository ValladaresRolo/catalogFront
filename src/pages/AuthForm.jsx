import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginService, signupService } from '../service/user'
import { useUser } from '../context/UserContext'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { pinwheel } from 'ldrs'
import { Container, Row, Col } from 'react-bootstrap'



pinwheel.register()

export const AuthForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const [isMember, setIsMember] = useState(false)
    const { token, setToken, setUser } = useUser()
    const [error, setError] = useState(null)



    const onSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true);

        const formData = new FormData(e.target)
        const dataObject = Object.fromEntries(formData)
        console.log(dataObject)

        if (isMember) {
            try {
                const userData = await loginService(dataObject);
                console.log(userData);
                setToken(userData.detail.token)
                setUser(userData.detail.user)
                navigate('/catalogFront/perfil');
            } catch (error) {
                console.error(error)
                setError('Usuario o password incorrecto')

            }

        } else {
            const userData = await signupService(dataObject)
            console.log(userData)
            setToken(userData.detail.token)
            setUser(userData.detail.user)
            navigate('/catalogFront/perfil');
        }
        setIsLoading(false);
    }

    return (
        <section>


            <form onSubmit={onSubmit} >

                <Container>
                    <Row>
                        <Col sm={6}>  <h3>
                            {isMember ? "Como que no eres miembro aun?" : "Ingresa a tu cuenta"}</h3>
                            <p>  <Button type='button' variant="secondary" onClick={() => setIsMember(!isMember)}>{isMember ? "Registrate" : "Accede"}</Button>

                            </p></Col>
                        <Col sm={6}>
                            <h3>{isMember ? "Accede" : "Registrate"}</h3>

                            {!isMember && (
                                <>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control id="firstName" type="text" name='firstName' placeholder="Nombre" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control id="lastName" type="text" name='lastName' placeholder="Apellido" />
                                    </Form.Group>
                                </>
                            )
                            }
                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="mail" type="email" name='mail' placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="password" type="password" name='password' placeholder="password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>

                        </Col>
                    </Row>

                </Container>

            </form>

            <p>{error}</p>
            {isLoading && <l-pinwheel size="60" stroke="3.5" speed="0.9" color="black"></l-pinwheel>}

        </section>

    )
}