import { type Author } from "@/interfaces/author";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug min-h-[3rem] flex items-center">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 min-h-[4rem] flex items-center">
        {excerpt}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <Avatar>
          <AvatarImage src={author.picture} alt={author.name} />
          <AvatarFallback>{author.name}</AvatarFallback>
        </Avatar>
        <div className="text-xl font-bold">{author.name}</div>
      </div>
    </div>
  );
}
