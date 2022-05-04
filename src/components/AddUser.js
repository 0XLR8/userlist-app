import { useContext, useState } from "react"
import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";

const AddUser = () => {

    const {handleAddUser} = useContext(UserContext);
    const {handleAlert, handleShow} = useContext(AlertContext);
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "" || age === ""){
            handleAlert("EMPTY");
            handleShow();
            return;
        }
        if(isNaN(age) || Number(age) < 0){
            handleAlert("AGE");
            handleShow();
            return;
        }
        handleAddUser({username, age});
        setUsername("");
        setAge("");
    }

    return(
        <form className="add-user section" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Age (Years)</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <button className="btn-purple" type="submit">Add User</button>
        </form>
    )
}

export default AddUser;