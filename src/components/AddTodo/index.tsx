import { useState, useContext } from "react";
import { TodoContext } from '../../context/TodoContext';

export function AddTodo() {
    const [title, setTitle] = useState('');
    const { addTask } = useContext(TodoContext);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (title.trim()) {
        addTask(title.trim());
        setTitle('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  };