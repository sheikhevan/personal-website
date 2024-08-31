import React from "react";
import { getPostData, getAllPostIds } from "../../../lib/posts";
import { CalendarIcon } from "lucide-react";

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
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-brunswick mb-6">
            {postData.title}
          </h1>
          <div className="flex items-center text-lg text-gray-500 mb-10">
            <CalendarIcon className="mr-2 h-6 w-6" />
            <time dateTime={postData.date}>{postData.date}</time>
          </div>
          <div
            className="prose prose-xl max-w-none prose-headings:text-brunswick prose-a:text-sage hover:prose-a:text-fern"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </div>
      </article>
    </main>
  );
}
