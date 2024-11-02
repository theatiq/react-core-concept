import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [allposts, setallposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setallposts(data));
  }, []);
  return (
    <div>
      {allposts.map((posting) => (
        <Post post={posting}></Post>
      ))}
    </div>
  );
}
