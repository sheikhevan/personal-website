import React from "react";
import { getPostData, getAllPostIds } from "../../../lib/posts";
import dynamic from "next/dynamic";

const BlogPostContent = dynamic(() => import("@/components/BlogPostContent"), {
  ssr: false,
});

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths;
}

export default async function BlogPost({ params }: Params) {
  const postData = await getPostData(params.slug);

  return (
    <main className="min-h-screen w-full bg-white bg-dot-hunter/[0.4] pt-20 px-4 sm:px-6 lg:px-8">
      <BlogPostContent
        title={postData.title}
        date={postData.date}
        content={postData.content}
      />
    </main>
  );
}
