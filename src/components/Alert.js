import { useContext } from "react";
import { Modal } from "react-bootstrap";
import AlertContext from "../context/AlertContext";

const Alert = () => {

    const {show, alert, handleClose} = useContext(AlertContext);

    return(
        <Modal show={show} centered onHide={handleClose}>
            <h1 className="p-3">Invalid input</h1>
            <div className="px-3 pt-4 pb-3">
                <p className="pb-4">{alert}</p>
                <button className="btn-purple ms-auto" onClick={handleClose}>Okay</button>
            </div>

        </Modal>
    )
}

export default Alert;