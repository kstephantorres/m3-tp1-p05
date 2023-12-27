import { Form, Button } from "react-bootstrap";
import ListaTarea from './ListaTarea'
import { useEffect, useState } from "react";

const FormularioTarea = () => {
    const [tarea, setTarea]= useState('');
    const listaTareaLS = JSON.parse(localStorage.getItem('keyTareas')) || []
    const [listaTarea, setListaTarea] =  useState(listaTareaLS)

    // Se ejecuta dos veces solo en desarrollo
    useEffect(()=>{
        localStorage.setItem('keyTareas', JSON.stringify(listaTarea));
    },[listaTarea])

    // handle+algo nombre de funciones para el manejo de states 
    const handleSubmit =(e)=>{
        e.preventDefault()
        // realizar algo similar al push tarea
        // operador spred ...
        setListaTarea([...listaTarea,tarea.trim()])
        setTarea('')
    }

    const borrarTarea=(nombreTarea)=>{
        const tareasFiltradas = listaTarea.filter((tarea)=> tarea !== nombreTarea)
        setListaTarea(tareasFiltradas)
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
            <ListaTarea listaTarea={listaTarea} borrarTarea={borrarTarea}></ListaTarea>
        </section>
    );
};

export default FormularioTarea;