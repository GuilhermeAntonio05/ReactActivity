import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TaskEditForm() {

    const [task, setTask] = useState({ id: 0, nome: '', descricao: '', estado: '' })
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/tasks/${id}`)
            .then(resp => resp.json())
            .then(data => setTask(data))
    }, [id])

    function handleChange(event) {
        const { name, value } = event.target
        setTask((prevtask) => ({
            ...prevtask,
            [name]: value
        }))
    }

    function alterartask() {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PUT",
            headers: { 'ContentType': 'application/json' },
            body: JSON.stringify(task)
        })
    }

    return (
        <div className="container">
            <form>
                <label className="control-form">Informe Nome</label>
                <input className="form-control mb-2"
                    name="nome"
                    placeholder="Informe Nome. Ex: (Estudar)"
                    value={task.nome}
                    onChange={handleChange}
                />

                <label>Informe Descrição</label>
                <input className="form-control mb-2"
                    name="descricao"
                    placeholder="Informe Descrição. Ex: (Estudar por 10 minutos)"
                    value={task.descricao}
                    onChange={handleChange}
                />

                <label>Informe Estado</label>
                <select className="form-control mb-2"
                    name="estado"
                    value={task.estado}
                    onChange={handleChange}
                >
                    <option value="">Selecione o estado</option>
                    <option value="pendente">Pendente</option>
                    <option value="concluida">Concluída</option>
                </select>

                <button
                    className="btn btn-outline-primary"
                    onClick={alterartask}
                >
                    <Link to={`../lista/todo`}>
                        Gravar
                    </Link>
                </button>
                <button
                    className="btn btn-outline-warning">
                    <Link to={`../lista/todo`}>
                        Cancelar
                    </Link>
                </button>
            </form>
        </div>
    );
}

export default TaskEditForm;