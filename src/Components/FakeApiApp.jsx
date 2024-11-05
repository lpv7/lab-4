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
    const dataAPI = await response.json();
    setData(dataAPI);
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
}

/*import { useState } from "react";
import FormComponent from "./FormComponent";
import TodoCardComponent from "./TodoCardComponent";

export default function TodoAppContainer() {
  const [todo, setTodo] = useState({
    title: "",
    checked: false,
  }); //state to store todo

  const [todoList, setTodoList] = useState([]); //state to store todo list

  //function to handle input change in form
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  //function to handle checkbox change
  const handleCheck = (e, index) => {
    setTodoList(
      todoList.map((item, i) =>
        //if index is equal to i then change checked value to opposite of current value
        i === index ? { ...item, checked: e.target.checked } : item
      )
    );
  };

  //function to handle add todo
  const handleAddTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo({
      title: "",
      checked: false,
    });
  };

  //function to handle delete todo
  const handleDeleteTodo = (index) => {
    setTodoList(todoList.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <FormComponent
        handleAddTodo={handleAddTodo}
        handleChange={handleChange}
        todo={todo}
      />
      <TodoCardComponent
        handleDeleteTodo={handleDeleteTodo}
        handleCheck={handleCheck}
        todoList={todoList}
      />
    </div>
  );
}
 */

/*import { useState } from "react";
export default function SignUpForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${user.name}, Email: ${user.email}, Password: ${user.password}`
    );
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
 */
