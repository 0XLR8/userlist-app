import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        setUsers([user, ...users])
    }

    return(
        <UserContext.Provider value={{
            users,
            handleAddUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;