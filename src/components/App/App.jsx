import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppHeader from "../AppHeader/AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, label: "Going to learn react", important: true, like: true },
    { id: 2, label: "That is so good", important: false, like: false },
    { id: 3, label: "I need a break...", important: false, like: false },
  ]);

  const [term, setTerm] = useState("");

  const [filter, setFilter] = useState("all");

  const deleteItem = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const addItem = (text) => {
    const newPost = {
      label: text,
      important: false,
      id: uuidv4(),
    };
    setPosts([...posts, newPost]);
  };

  const onToggleImportant = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, important: !post.important } : { ...post }
      )
    );
  };

  const onToggleLiked = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, like: !post.like } : { ...post }
      )
    );
  };

  const searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  const onUpdateSearchHandler = (term) => {
    setTerm(term);
  };

  const filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    }

    if (filter === "all") {
      return items;
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const liked = posts.filter((post) => post.like).length;
  const allPosts = posts.length;

  const visiblePosts = filterPost(searchPost(posts, term), filter);

  return (
    <div className="app">
      <AppHeader liked={liked} allPosts={allPosts} />

      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearchHandler={onUpdateSearchHandler} />
        <PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>

      <PostList
        posts={visiblePosts}
        onDelete={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleLiked={onToggleLiked}
      />

      <PostAddForm onAdd={addItem} />
    </div>
  );
}

export default App;
