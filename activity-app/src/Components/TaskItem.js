import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TaskList() {

    const [task, setTask] = useState({ id: 0, nome: '', descricao: '', estado: '' })
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/tasks/${id}`)
            .then(resp => resp.json())
            .then(data => setTask(data))
    }, [id])

    return (
        <div className="container">
            <div className="taskBox">
                <h2>Nome: {task.nome}</h2>
                <h4>Descrição: {task.descricao}</h4>
                <h3>Estado: {task.estado}</h3>
            </div>

            <button className="btn btn-outline-primary">
                <Link to={"/lista/todo"}>Voltar</Link>
            </button>
            <button  className={`btn btn-outline-primary m-1 ${task.estado === "concluida" ? "d-none" : ""}`}>
            <Link to={`/editar/${task.id}`} >Editar</Link>
            </button>
        </div>
    );
}

export default TaskList;