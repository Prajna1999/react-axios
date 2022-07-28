import "./styles.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const client = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export default function App() {
  const [post, setPost] = useState(null);
  // const [error, setError] = useState(null);
  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response);
    }
    getPost();
  }, []);

  // if (error !== null) return `Error: ${error.message}`;
  if (post === null) return null;

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
