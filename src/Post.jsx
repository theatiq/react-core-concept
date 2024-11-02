export default function Post({ post }) {
  return (
    <div>
      <h3>ID: {post.id}</h3>
      <p>Title: {post.title}</p>
    </div>
  );
}
