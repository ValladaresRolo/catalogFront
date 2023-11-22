import { useState } from 'react';
import Form from 'react-bootstrap/Form';

export const AuthForm = () => {
    const [isMember, setIsMember] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()

        console.log('iso click')
    }
    return (


        <section>
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
        </section>




    )




}





