import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

const PostList = ({ posts, onDelete, onToggleLiked, onToggleImportant }) => {
  return (
    <ul className="app-list list-group">
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          id={post.id}
          label={post.label}
          important={post.important}
          like={post.like}
          onDelete={onDelete}
          onToggleLiked={onToggleLiked}
          onToggleImportant={onToggleImportant}
        />
      ))}
    </ul>
  );
};

export default PostList;
