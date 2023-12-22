import { ListGroup, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'

const ItemTarea = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            Tarea 1
            <Button variant="danger">Borrar <i className="bi bi-trash-fill"></i></Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;