import { Form, Button } from "react-bootstrap";
import ListaTarea from './ListaTarea'
import { useState } from "react";

const FormularioTarea = () => {
    const [tarea, setTarea]= useState('');
    const [listaTarea, setListaTarea] = useState([])

    // handle+algo nombre de funciones para el manejo de states 
    const handleSubmit =(e)=>{
        e.preventDefault()
        // realizar algo similar al push tarea
        // operador spred ...
        setListaTarea([...listaTarea,tarea.trim()])
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="text" 
                        placeholder="Ej: Tarea 1" 
                        minLength={3} 
                        maxLength={80} 
                        onChange={(e)=> setTarea(e.target.value)} 
                        value={tarea}
                    />
                    <Button variant="dark" className="ms-2" type="submit"> Agregar </Button>
                </Form.Group> 
            </Form>
            <ListaTarea></ListaTarea>
        </section>
    );
};

export default FormularioTarea;