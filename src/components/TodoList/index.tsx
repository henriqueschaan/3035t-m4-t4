import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export function TodoList() {
    const { tasks, toggleTask, deleteTask } = useContext(TodoContext);
  
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    );
  };
  