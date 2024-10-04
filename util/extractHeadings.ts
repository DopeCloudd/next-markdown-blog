// util/extractHeadings.ts
export const extractHeadings = (content: string) => {
  const headings: { level: number; text: string }[] = [];
  const regex = /^(#{1,6})\s(.*)$/gm; // Utiliser des groupes de capture ordinaires

  let match;
  while ((match = regex.exec(content))) {
    // Assurez-vous que match[1] n'est pas undefined
    if (match[1]) {
      const level = match[1].length; // Nombre de '#' pour le niveau
      const text = match[2];
      headings.push({ level, text });
    }
  }
  return headings;
};
