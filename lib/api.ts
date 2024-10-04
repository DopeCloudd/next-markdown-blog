import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { z } from "zod";
import { type Post } from "@/interfaces/post";

// Définition du schéma de validation pour un article
const PostSchema = z.object({
  title: z.string(),
  date: z.string(),
  coverImage: z.string().optional(),
  author: z.object({
    name: z.string(),
    picture: z.string().optional(),
  }),
  excerpt: z.string(),
  ogImage: z
    .object({
      url: z.string(),
    })
    .optional(),
  publish: z.boolean().optional().default(false),
  content: z.string(),
  preview: z.boolean().optional(),
});

const postsDirectory = join(process.cwd(), "_posts");

// Récupération des slugs des articles
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

// Récupération d'un article par son slug
export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Valider l'article en utilisant zod
  const parsedData = PostSchema.safeParse({ ...data, content });

  if (!parsedData.success) {
    console.error(`Erreur de validation pour le slug : ${realSlug}`);
    parsedData.error.issues.forEach((issue) => {
      console.error(`  - ${issue.path.join(" -> ")}: ${issue.message}`);
    });
    return null;
  }

  // Retourner l'article formaté
  return { ...parsedData.data, slug: realSlug } as Post;
}

// Récupération de tous les articles publiés
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && post.publish)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
