import Image from "next/image";
import { getAllPosts } from "@/lib/api";
import { PostsList } from "@/app/(components)/posts/posts.list";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {allPosts.length > 0 && <PostsList posts={allPosts} />}
      </main>
    </div>
  );
}
