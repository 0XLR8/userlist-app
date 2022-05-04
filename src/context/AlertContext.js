import { createContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({children}) => {

    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAlert = (text) => {
        switch(text){
            case "EMPTY":
                setAlert("Please enter a valid name and age (non-empty values).");
                break;
            case "AGE":
                setAlert("Please enter a valid age (>0).");
                break;
            default: 
                setAlert("");
                break;
        }
    }

    return(
        <AlertContext.Provider value={{
            show,
            alert,
            handleClose,
            handleShow,
            handleAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;