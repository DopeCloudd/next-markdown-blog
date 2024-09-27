"use client";
import Link from "next/link";
import { ThemeToggle } from "@/app/(components)/nav/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between border-b py-5">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold ml-2">Blog | Valentin LEROUGE</h1>
        </Link>
      </div>
      <ul className="flex items-center space-x-5">
        <li>
          <Link
            href="https://valentin-lerouge.fr/"
            target="_blank"
            className={`border ${buttonVariants({
              variant: "default",
            })} w-full md:w-auto`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
