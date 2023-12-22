import { Form, Button } from "react-bootstrap";
import ListaTarea from './ListaTarea'


const FormularioTarea = () => {
    return (
        <section>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Ej: Tarea 1" minLength={3} maxLength={80} />
                    <Button variant="dark" className="ms-2" type="submit"> Agregar </Button>
                </Form.Group>
                <ListaTarea></ListaTarea>
            </Form>
        </section>
    );
};

export default FormularioTarea;