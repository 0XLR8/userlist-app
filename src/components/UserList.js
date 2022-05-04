import { useContext } from "react"
import UserContext from "../context/UserContext"
import User from "./User";

const UserList = () => {

    const {users} = useContext(UserContext);

    return(
        <>
            { users.length > 0 && 
                <div className="section">
                    {
                        users.map((value, index) => {
                            return <User key={index} user={value} />
                        })
                    }
                </div>
            }
        </>
    )
}

export default UserList;