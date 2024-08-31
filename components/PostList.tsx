import Link from "next/link";
import { PostMetadata } from "../lib/posts";

interface PostListProps {
  posts: PostMetadata[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
          <br />
          <small>{date}</small>
        </li>
      ))}
    </ul>
  );
}
