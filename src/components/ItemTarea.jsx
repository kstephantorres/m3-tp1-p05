import { ListGroup, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'

const ItemTarea = ({nombreTarea, borrarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between item">
            <span>{nombreTarea}</span>
            <Button variant="danger" onClick={()=>{borrarTarea(nombreTarea)}}>Borrar <i className="bi bi-trash-fill mx-1"></i></Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;