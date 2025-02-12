import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskItem from './Components/TaskItem';
import RemoveItem from './Components/RemoveItem';
import Home from './Components/Home';
import TaskEditForm from './Components/TaskEditForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='lista/:estado' element={<TaskList />} />
        <Route path='cadastro' element={<TaskForm />} />
        <Route path='editar/:id' element={<TaskEditForm />} />
        <Route path='item/:id' element={<TaskItem />} />
        <Route path='excluir/:id' element={<RemoveItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
