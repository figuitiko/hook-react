import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, id) => (
        <TodoListItem 
            key={todo.id}
            todo={todo}
            index={id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
