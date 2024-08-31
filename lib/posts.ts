import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface PostMetadata {
  id: string;
  title: string;
  date: string;
}

export interface Post extends PostMetadata {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

// Cache for post data
let postCache: { [key: string]: Post } = {};

export async function getSortedPostsData(): Promise<PostMetadata[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
      };
    }),
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<Post> {
  if (postCache[id]) {
    return postCache[id];
  }

  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const post = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  };

  postCache[id] = post;
  return post;
}

export async function getAllPostIds(): Promise<{ params: { slug: string } }[]> {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
}
