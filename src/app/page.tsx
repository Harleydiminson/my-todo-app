'use client';
import { useState, useEffect } from "react";
import TodoForm from "@/components/todos/TodoForm";
import Todo from "@/components/todos/Todo";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      const data = await response.json()
      setTodos(data)
    }
    fetchTodos()
  }, [])

  const addTodoHandler = async (text: string) => {
    const newTodo = {
      title: text,
      completed: false,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    const data = await response.json();
    setTodos((prevTodos) => [...prevTodos, data]);
  };

  const deleteTodoHandler = async (id: number) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <TodoForm  addTodo={addTodoHandler} />
      
      <div className="max-h-[500px] overflow-auto border border-gray-300 p-4" style={{marginTop: '10px'}}>
        {todos.map((todo) => (<Todo key={todo.id} todo={todo} deleteTodoHandler ={deleteTodoHandler}/>))}
      </div>
    </div>
  );
}

