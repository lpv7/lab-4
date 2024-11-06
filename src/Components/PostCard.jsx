//3. PostCard, this is a presentational component that will show one post that will contain a title and body of the post

export default function PostCard({ title, body }) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <h2>{body}</h2>
    </div>
  );
}
