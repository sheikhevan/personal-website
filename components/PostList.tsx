import Link from "next/link";
import { PostMetadata } from "@/lib/posts";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

interface PostListProps {
  posts: PostMetadata[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {posts.map(({ id, date, title }) => (
        <Link key={id} href={`/blog/${id}`}>
          <BentoGridItem
            header="image goes here"
            title={title}
            description={date}
          ></BentoGridItem>
        </Link>
      ))}
    </BentoGrid>
  );
}
