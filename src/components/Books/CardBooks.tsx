export function CardBooks({
  id,
  title,
  author,
  publisher,
  year,
  pages,
  genre,
  language,
}: {
  id: string;
  title: string;
  author: string;
  publisher: string;
  year: number;
  pages: number;
  genre: string;
  language: string;
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Autor: {author}</p>
        <p>Editora: {publisher}</p>
        <div className="flex">
          <p>Ano: {year}</p>
          <p>Número de Páginas: {pages}</p>
        </div>
        <p>Idioma: {language}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline ">{genre}</div>
        </div>
      </div>
    </div>
  );
}
