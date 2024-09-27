"use client";
import Link from "next/link";
import { ThemeToggle } from "@/app/(components)/nav/theme-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between border-b py-5">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold ml-2">Blog</h1>
      </div>
      <ul className="flex items-center space-x-5">
        <li>
          <Link href="/docs">Docs</Link>
        </li>
        <li>
          <Link href="/examples">Examples</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
