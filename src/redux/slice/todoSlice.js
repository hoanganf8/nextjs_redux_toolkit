import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../middlewares/todoMiddleware";

const initialState = {
  todoList: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = "success";
    });
  },
});
