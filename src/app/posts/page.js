import PostForm from "./PostForm";
import PostList from "./PostList";

const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostList />
      <PostForm />
    </div>
  );
};

export default PostsPage;
