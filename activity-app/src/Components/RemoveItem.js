import { useParams, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

function RemoveItem(){
    const [task, setTask] = useState({id:0, nome:'', descricao:'', estado: ''})
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:3000/tasks/${id}`)  
        .then(resp => resp.json())
        .then(data => setTask(data))
    },[id])

    function remove(){
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
            headers:{'ContentType':'application/json'},
            body:JSON.stringify(task)
        })
        navigate("../lista/todo")
    }
    return(
        remove()
    );
}

export default RemoveItem;