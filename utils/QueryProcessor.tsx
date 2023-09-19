export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  };

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "The Andrew ID of the supporter of this site is yinqis."
    )
  }
  
  if (query.toLowerCase().includes("your name")) {
    return (
      "My name is Emma."
    )
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  return "";
}
