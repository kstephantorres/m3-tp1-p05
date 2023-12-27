import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({listaTarea}) => {

    return (
        <ListGroup>
            {
                listaTarea.map((tarea,position) => <ItemTarea key={position} nombreTarea={tarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTarea;