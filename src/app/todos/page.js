"use client";

import { fetchTodos } from "@/redux/middlewares/todoMiddleware";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const TodosPage = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === "pending") {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <ul>
        {todoList.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
