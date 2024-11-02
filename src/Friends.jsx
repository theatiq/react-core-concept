import { useEffect, useState } from "react";
import "./App.css";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="student">
      <h3>Number of Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
