/*2. PostsContainer is a presentational component, the main container holding all PostCard components. 
Try to display descendingly, which means the new posts appear first on the list.
*/
import PostCard from "./PostCard";

export default function PostsContainer({ data, fetchPosts, isLoading }) {
  return (
    <div>
      {/* {isLoading && <h1>Loading...</h1>} */}
      {data.map((...newPost) => (
        <PostCard title={data.title} body={data.body} />
      ))}
    </div>
  );
}
