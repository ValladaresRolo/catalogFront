import { useContext, useState } from 'react';
import Spinner from "react-bootstrap/Spinner";
import { loginService, signupService } from '../service/user';
import { UserContext } from '../context/UserContext';

export const AuthForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isMember, setIsMember] = useState(false)
    const { token, setToken } = useContext(UserContext)

    const onSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true);

        const formData = new FormData(e.target)
        const dataObject = Object.fromEntries(formData)
        console.log(dataObject)

        if (isMember) {
            const userData = await loginService(dataObject)
            console.log(userData)
            setToken(userData.detail.token)
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
                        <div>
                            <label htmlFor="firstName" >Nombre</label>
                            <input id="firstName" type="text" name="firstName"></input>
                        </div>
                        <div>
                            <label htmlFor="lastName" >Apellido</label>
                            <input id="lastName" type="text" name="lastName"></input>
                        </div>
                    </>

                )
                }
                <div>
                    <label htmlFor="mail" >Email</label>
                    <input id="mail" type="text" name="mail"></input>
                </div>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input id="password" type="password" name="password"></input>

                </div>

                <button type="submit">Submit</button>

                <p>
                    {isMember ? "Not a member yet?" : "Already a member?"}
                    <button type='button' onClick={() => setIsMember(!isMember)}>{isMember ? "Register" : "Login"}</button>
                </p>
            </form>
            {isLoading && <Spinner animation="grow" variant="warning" />}
        </section>
    )
}





