const { createAsyncThunk } = require("@reduxjs/toolkit");

//Thunk Function
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();
  return data;
});
