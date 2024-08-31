import { getSortedPostsData } from "../../lib/posts";
import PostList from "../../components/PostList";

export const revalidate = 3600; // revalidate every hour

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <main>
      <div className="h-screen w-full bg-white bg-dot-hunter/[0.4] flex flex-col items-center justify-center">
        <p className="text-4xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-sage to-fern py-6">
          Blog
        </p>
        <PostList posts={allPostsData} />
      </div>
    </main>
  );
}
