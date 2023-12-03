"use client";

import { useState } from "react";
import { postApi } from "@/redux/services/postApi";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [addPost, result] = postApi.useAddPostMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title });
  };
  console.log(result);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button>Add</button>
    </form>
  );
};

export default PostForm;
