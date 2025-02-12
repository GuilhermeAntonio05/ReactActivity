import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="container d-flex justify-content-around boxMenu">
            <button className="btn btn-primary w-25 h-25 align-self-center"><Link to={'lista/todo'} className="texto-branco">Visualizar Tabela</Link></button>
            <button className="btn btn-primary w-25 h-25 align-self-center"><Link to={'cadastro'} className="texto-branco">Adicionar Tarefa</Link></button>
        </div>
    );
}

export default Home;