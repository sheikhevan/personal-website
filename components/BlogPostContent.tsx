"use client";

import React, { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { marked } from "marked";

interface BlogPostContentProps {
  title: string;
  date: string;
  content: string;
}

export default function BlogPostContent({
  title,
  date,
  content,
}: BlogPostContentProps) {
  const [contentHtml, setContentHtml] = useState("");

  useEffect(() => {
    setContentHtml(marked(content));
  }, [content]);

  return (
    <>
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-brunswick mb-6">
            {title}
          </h1>
          <div className="flex items-center text-lg text-gray-500 mb-10">
            <CalendarIcon className="mr-2 h-6 w-6" />
            <time dateTime={date}>{date}</time>
          </div>
          <div
            className="prose prose-xl max-w-none prose-headings:text-brunswick prose-a:text-sage hover:prose-a:text-fern"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
      <style jsx global>{`
        .prose h1 {
          font-size: 2.25em;
          margin-top: 0;
          margin-bottom: 0.8888889em;
          line-height: 1.1111111;
        }
        .prose h2 {
          font-size: 1.5em;
          margin-top: 2em;
          margin-bottom: 1em;
          line-height: 1.3333333;
        }
        .prose h3 {
          font-size: 1.25em;
          margin-top: 1.6em;
          margin-bottom: 0.6em;
          line-height: 1.6;
        }
        .prose h4 {
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          line-height: 1.5;
        }
        .prose p,
        .prose ul,
        .prose ol {
          margin-top: 1.25em;
          margin-bottom: 1.25em;
        }
        .prose img {
          margin-top: 2em;
          margin-bottom: 2em;
        }
        .prose a {
          text-decoration: underline;
        }
        .prose strong {
          font-weight: 600;
        }
        .prose blockquote {
          font-style: italic;
          border-left-width: 0.25rem;
          border-left-color: #e5e7eb;
          padding-left: 1rem;
        }
      `}</style>
    </>
  );
}
