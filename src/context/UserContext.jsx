import { createContext, useContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)


    const isLogged = Boolean(user) // Derivar el estado isLogged del estado del usuario


    return (
        <UserContext.Provider value={{
            token,
            setToken,
            user,
            setUser,


            //  para recolectar todas las varias bles que esten globales ejemplo userName, setUserName segir 
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe ser usado dentro de un UserProvider');
    }
    return context;
};
