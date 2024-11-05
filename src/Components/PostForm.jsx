//4. PostForm is a presentational component that displays a form containing two text inputs, one for the title and one for the body.

export default function PostForm({ newPost, handleChange, handleAddPost }) {
  return (
    <div>
      <input
        type="text"
        name="title"
        value={newPost.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        value={newPost.body}
        onChange={handleChange}
      />
      <button onClick={handleAddPost}>Submit</button>
    </div>
  );
}
