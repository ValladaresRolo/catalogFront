import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService, signupService } from '../service/user';
import { UserContext } from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { pinwheel } from 'ldrs'
pinwheel.register()


export const AuthForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [isMember, setIsMember] = useState(false)
    const { token, setToken } = useContext(UserContext)
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
                setToken(userData.detail.token);
                navigate(isMember ? '/perfil' : '/')
            } catch (error) {
                console.error(error)
                setError('Usuario o password incorrecto')

            }

        } else {
            const userData = await signupService(dataObject)
            console.log(userData)
            setToken(userData.detail.token)
        }
        setIsLoading(false);
    }

    return (
        <section>
            <p>{token}</p>


            <form onSubmit={onSubmit} >
                <h3>{isMember ? "Login" : "Register"}</h3>

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
                    Submit
                </Button>
                <p>
                    {isMember ? "Not a member yet?" : "Already a member?"}
                    <Button type='button' variant="secondary" onClick={() => setIsMember(!isMember)}>{isMember ? "Register" : "Login"}</Button>



                </p>
            </form>

            <p>{error}</p>
            {isLoading && <l-pinwheel size="60" stroke="3.5" speed="0.9" color="black"></l-pinwheel>}
        </section>
    )
}