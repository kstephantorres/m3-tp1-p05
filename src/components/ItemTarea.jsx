import { ListGroup, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'

const ItemTarea = ({nombreTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {nombreTarea}
            <Button variant="danger">Borrar <i className="bi bi-trash-fill"></i></Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;