import { Mdx } from "@/mdx/Mdx";
import markdownStyles from "@/styles/markdown-styles.module.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  content: string;
  headings: { level: number; text: string }[]; // Ajout des props pour les headings
};

export function PostBody({ content, headings }: Props) {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Affichage du sommaire */}
      {headings.length > 0 && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sommaire</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="px-4">
              {headings.map((heading, index) => (
                <li key={index} className={`pl-${heading.level * 2} py-1`}>
                  <a
                    href={`#${heading.text
                      .toLowerCase()
                      .replace(/[.]/g, "")
                      .replace(/\s+/g, "-")}`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      <div className={markdownStyles["markdown"]}>
        <Mdx>{content}</Mdx>
      </div>
    </div>
  );
}
