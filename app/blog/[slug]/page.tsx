import { getPostData, getAllPostIds } from "../../../lib/posts";

interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 3600; // revalidate every hour

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths;
}

export default async function Post({ params }: Params) {
  const postData = await getPostData(params.slug);

  return (
    <article>
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
}
