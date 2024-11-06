/*2. PostsContainer is a presentational component, the main container holding all PostCard components. 
Try to display descendingly, which means the new posts appear first on the list.
*/
import PostCard from "./PostCard";

export default function PostsContainer({ data, fetchPosts, isLoading }) {
  return (
    <div>
      {data.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} /> //key is not required here, but good to include for when edits, deletes, etc. are required
      ))}
    </div>
  );
}
