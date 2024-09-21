import React from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

const BlogPostCard = React.memo(({ id, date, title }) => (
  <Link
    href={`/blog/${id}`}
    className="transform transition duration-300 hover:scale-105"
  >
    <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-brunswick dark:text-sage">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <time dateTime={date}>{date}</time>
        </div>
      </CardContent>
    </Card>
  </Link>
));

BlogPostCard.displayName = 'BlogPostCard';

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return (
    <main className="pt-16">
      <div className="min-h-screen w-full bg-white bg-dot-hunter/[0.4] flex flex-col items-center">
        <h1 className="text-5xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-sage to-fern py-12">
          Blog
        </h1>
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map(({ id, date, title }) => (
              <BlogPostCard key={id} id={id} date={date} title={title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
