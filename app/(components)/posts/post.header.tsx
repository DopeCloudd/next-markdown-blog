import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { type Author } from "@/interfaces/author";
import React from "react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left">
        {title}
      </h1>
      <div className="md:mb-12">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={author.picture} alt={author.name} />
            <AvatarFallback>{author.name}</AvatarFallback>
          </Avatar>
          <div className="text-xl font-bold">{author.name}</div>
        </div>
        <div className="mt-2 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
