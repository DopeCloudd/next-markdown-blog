import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug } from "@/lib/api";
import { PostBody } from "@/app/(components)/posts/post.body";
import { PostHeader } from "@/app/(components)/posts/post.header";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { extractHeadings } from "@/util/extractHeadings";
import Head from "next/head";

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://blog.valentin-lerouge.fr/posts/${post.slug}`,
      type: "article",
    },
  };
};

export default async function Post({ params }: Params) {
  const post = await getPostBySlug(params.slug); // Utilisation correcte de async/await

  if (!post) {
    return notFound();
  }

  // Extraction des titres
  const headings = extractHeadings(post.content);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`https://blog.valentin-lerouge.fr/${post.slug}`}
        />
        <meta property="og:type" content="article" />
      </Head>
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
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};
