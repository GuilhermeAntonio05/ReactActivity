import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TaskList() {
    const [contatos, setContatos] = useState([]);

    function load() {
        fetch('http://localhost:3000/contatos')
            .then(response => response.json())
            .then(data => setContatos(data))
    }



    useEffect(() => {
        load()
    }, [])

    return (
        <div className="container">
            <h1>taskList</h1>
            <br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Estado</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contatos.map(c => {
                            return <tr>
                                <td>{c.nome}</td>
                                <td>{c.descricao}</td>
                                <td>{c.estado}</td>
                                <td>
                                    <Link to={'/cadastro'} className="btn btn-outline-primary">Editar </Link>
                                    <Link to={`/excluir/${c.id}`} className="btn btn-outline-warning">excluir</Link>
                                </td>
                            </tr>
                        }
                        )
                    }
                </tbody>
            </table>
            <button className="btn btn-outline-primary"><Link to={'/cadastro'}>Adicionar</Link></button>
        </div>
    );
}

export default TaskList;