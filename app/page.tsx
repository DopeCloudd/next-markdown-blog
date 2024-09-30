import { getAllPosts } from "@/lib/api";
import { PostsList } from "@/app/(components)/posts/posts.list";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen flex justify-center items-center p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-[1200px] flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {allPosts.length > 0 && <PostsList posts={allPosts} />}
      </main>
    </div>
  );
}
