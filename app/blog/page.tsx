import { getSortedPostsData } from "../../lib/posts";
import PostList from "../../components/PostList";

export const revalidate = 3600; // revalidate every hour

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <main>
      <h1>My Blog</h1>
      <PostList posts={allPostsData} />
    </main>
  );
}
