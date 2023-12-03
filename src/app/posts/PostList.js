"use client";
import { postApi } from "@/redux/services/postApi";
console.log(postApi);
const PostList = () => {
  const { data: posts, isLoading, error } = postApi.useGetPostsQuery();
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error...</h3>;
  }
  return (
    <div>
      {posts?.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default PostList;
