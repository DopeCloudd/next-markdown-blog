import { MDXRemote, MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { MDX_COMPONENTS } from "@/mdx/mdx-components";
import { rehypePlugin } from "@/mdx/mdx-plugin";

export const Mdx = ({ children }: { children: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote
        source={children}
        options={
          {
            mdxOptions: {
              rehypePlugins: rehypePlugin,
            },
          } as MDXRemoteOptions
        }
        components={MDX_COMPONENTS}
      />
    </Suspense>
  );
};
