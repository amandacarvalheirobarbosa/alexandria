import { CardBooks } from "@/components/Books/CardBooks";

/* async function getData() {
  const res = await fetch("https://api.example.com/...");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
} */

export default async function Home() {
  /*   const data = await getData(); */

  return (
    <div className="flex flex-row flex-wrap justify-around">
      <CardBooks
        id={"123456"}
        key={0}
        author={"AMANDA CARVALHEIRO"}
        genre={"FICÇÃO"}
        language={"PORTUGUÊS"}
        pages={150}
        publisher={"DARKSIDER"}
        title={"TITULO TESTE"}
        year={2023}
      />
    </div>
  );
}
