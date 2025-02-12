import { useParams, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

function RemoveItem(){
    const [contato, setContato] = useState({id:0, nome:'', descricao:'', estado: ''})
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:3000/contatos/${id}`)  
        .then(resp => resp.json())
        .then(data => setContato(data))
    },[id])

    function remove(){
        fetch(`http://localhost:3000/contatos/${id}`, {
            method: 'DELETE',
            headers:{'ContentType':'application/json'},
            body:JSON.stringify(contato)
        })
    }

    return(
        remove(),
        navigate("/")
    );
}

export default RemoveItem;