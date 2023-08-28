import React from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodos: (text: string) => void;
  removeTodos: (id: string) => void;
};

interface TodosContextProviderProps {
  children: React.ReactNode;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodos: () => {},
  removeTodos: (id: string) => {},
});

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  
  const contextValues: TodosContextObj = {
    items: todos,
    addTodos: addTodoHandler,
    removeTodos: removeTodoHandler,
  };
  
  return <TodosContext.Provider value={contextValues}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
