import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function TaskList() {
  const [task, setTask] = useState([]);
  const { estado } = useParams();

  function load() {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTask(data));
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <button className="btn btn-outline-primary">
        <Link to={"/"}>Home</Link>
      </button>
      <button className="btn btn-outline-primary">
        <Link to={"/cadastro"}>Adicionar</Link>
      </button>
      <button className="btn btn-outline-primary">
        <Link to={"/lista/todo"}>Todas</Link>
      </button>
      <button className="btn btn-outline-primary">
        <Link to={"/lista/concluida"}>Concluidas</Link>
      </button>
      <button className="btn btn-outline-primary">
        <Link to={"/lista/pendente"}>Pendentes</Link>
      </button>
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
          {task.map((c) => {
            if ((estado === "todo") || (c.estado === estado)) {
              return (
                <tr>
                  <td>{c.nome}</td>
                  <td>{c.descricao}</td>
                  <td>{c.estado}</td>
                  <td>
                    <Link to={`/editar/${c.id}`}  className={`btn btn-outline-primary m-1 ${c.estado === "concluida" ? "d-none" : ""}`}>
                      Editar
                    </Link>
                    <Link
                      to={`/excluir/${c.id}`}
                      className="btn btn-outline-danger m-1"
                    >
                      Excluir
                    </Link>
                    <Link
                      to={`/item/${c.id}`}
                      className="btn btn-outline-warning m-1"
                    >
                      Visualizar
                    </Link>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>

    </div>
  );
}

export default TaskList;
