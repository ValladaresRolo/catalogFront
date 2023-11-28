import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    return (
        <UserContext.Provider value={{
            token,
            setToken,


            //  para recolectar todas las varias bles que esten globales ejemplo userName, setUserName segir 
        }}>
            {children}
        </UserContext.Provider>
    )
}
