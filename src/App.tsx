import { TodoProvider } from './context/TodoContext';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Lista de Tarefas</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
