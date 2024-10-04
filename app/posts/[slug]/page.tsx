import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { PostBody } from "@/app/(components)/posts/post.body";
import { PostHeader } from "@/app/(components)/posts/post.header";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { extractHeadings } from "@/util/extractHeadings";

export default async function Post({ params }: Params) {
  const post = await getPostBySlug(params.slug); // Utilisation correcte de async/await

  if (!post) {
    return notFound();
  }

  // Extraction des titres
  const headings = extractHeadings(post.content);

  return (
    <main>
      <div className="max-w-[1200px] py-8 mx-auto px-5 md:px-0">
        <article>
          <Link
            href="/"
            className={`border ${buttonVariants({
              variant: "outline",
            })} w-full md:w-auto mb-4`}
          >
            <ArrowLeft />
            Retour
          </Link>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} headings={headings} />{" "}
          {/* Passage des titres */}
        </article>
      </div>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};
