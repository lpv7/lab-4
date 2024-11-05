/*2. PostsContainer is a presentational component, the main container holding all PostCard components. 
Try to display descendingly, which means the new posts appear first on the list.
*/
import PostCard from "./PostCard";

export default function PostsContainer({ data, fetchPosts, isLoading }) {
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}

      <PostCard />
    </div>
  );
}

<div>
  {data.map((...newPost) => (
    <PostCard data={data} />
  ))}
</div>;

/*import { useState } from "react";
import FormComponent from "./FormComponent";
import TodoCardComponent from "./TodoCardComponent";

export default function TodoAppContainer() {



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
