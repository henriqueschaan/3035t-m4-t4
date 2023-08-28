import React, { createContext, useState } from 'react';
import { Task } from '../types';

type TodoContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

type TodoProviderProps = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextType>({} as TodoContextType);

export function TodoProvider({ children }: TodoProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};
