/*1. FakeApiApp, this is the logical component of the app that will contain three states:
1. data: an array state that will hold all the data grabbed from the fake API
2. loading: a Boolean state showing the loading sign if the data is still loading
3. newPost: an object state that will store a new post
d. The URL of the fake API is https://jsonplaceholder.typicode.com/posts
e. Add all the handlers needed for the PostForm*/

import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.title]: e.target.value,
      [e.target.body]: e.target.value,
    });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    alert(`Title: ${newPost.title}, Body: ${newPost.body}`);
  };

  if (!isLoading) {
    return (
      <div>
        <PostForm
          newPost={newPost}
          handleChange={handleChange}
          handleAddPost={handleAddPost}
        />
        {/* handleChange */}
        {/* handleAddPost */}

        {/* props: post */}

        <PostsContainer
          data={data}
          fetchPosts={fetchPosts}
          isLoading={isLoading}
        />
      </div>
    );
  } else {
    return <pre>Loading...</pre>;
  }
}
