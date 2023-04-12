import './App.css';
import { AddTodo } from './components/AddTodo';
import { Todos } from './components/Todos';


function App() {
  return (
    <div className="App">
      <div className='container w-75'>
        <p className="fs-1">Cavalown's React Todo List</p>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
