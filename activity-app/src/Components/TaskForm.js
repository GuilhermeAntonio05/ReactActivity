import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function TaskForm() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [estado, setEstado] = useState('');

    const task = { nome, descricao, estado };
     const navigate = useNavigate();

    function cancelar() {
        navigate("../lista/todo")
    }

    function addtask() {
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { 'ContentType': 'application/json' },
            body: JSON.stringify(task)
        })
        navigate("../lista/todo")
    }

    return (
        <div className="container">
            <form>
                <label className="control-form">Informe nome</label>
                <input className="form-control mb-2"
                    type="text"
                    placeholder="Informe nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label>Informe descricao</label>
                <input className="form-control mb-2"
                    type="descricao"
                    placeholder="Informe descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />

                <label>Informe Estado</label>
                <select className="form-control mb-2"
                    type="tel"
                    placeholder="Informe estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Selecione o estado</option>
                    <option value="pendente">Pendente</option>
                    <option value="concluida">Concluída</option>
                </select>

                <button
                    className="btn btn-outline-primary"
                    onClick={addtask}
                >
                    Gravar
                </button>
                <button
                    className="btn btn-outline-warning"
                    onClick={cancelar}
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
}

export default TaskForm;