import { useState } from "react"
//import { useNavigate } from 'react-router-dom'

function TaskForm() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [estado, setEstado] = useState('');

    const contato = { nome, descricao, estado };
    // const navigate = useNavigate();

    function limparCampos() {
        setNome("");
        setEstado("");
        setDescricao("");
    }

    function AddContato() {
        fetch("http://localhost:3000/contatos", {
            method: "POST",
            headers: { 'ContentType': 'application/json' },
            body: JSON.stringify(contato)
        })
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

                <label>Informe fone</label>
                <input className="form-control mb-2"
                    type="tel"
                    placeholder="Informe estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />

                <div className="mt-4 d-flex justify-content-between">
                    <button
                        className="btn btn-outline-primary"
                        onClick={AddContato}
                    >
                        Gravar
                    </button>
                    <button
                        className="btn btn-outline-warning"
                        onClick={limparCampos}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;