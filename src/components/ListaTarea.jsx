import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({listaTarea, borrarTarea}) => {

    return (
        <ListGroup>
            {
                listaTarea.map((tarea,position) => <ItemTarea key={position} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTarea;