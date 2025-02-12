import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskItem from './Components/TaskItem';
import RemoveItem from './Components/RemoveItem';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route path='lista/:estado' element={<TaskList />} />
        <Route path='cadastro' element={<TaskForm />} />
        <Route path='item' element={<TaskItem />} />
        <Route path='excluir/:id' element={<RemoveItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
