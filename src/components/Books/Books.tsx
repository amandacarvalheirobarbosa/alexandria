"use client";

export function Books() {
  return (
    <div>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => window.modalBooks.showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      <dialog id="modalBooks" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <div className="flex flex-col w-full h-full p-2 justify-between">
            <h2
              className="font-bold text-center"
              style={{
                fontSize: "25px",
              }}
            >
              Adicione um livro
            </h2>
            <input
              type="text"
              placeholder="Titulo"
              className="input w-full max-w-sm my-2"
            />
            <input
              type="text"
              placeholder="Autor"
              className="input w-full max-w-sm my-2"
            />
            <input
              type="text"
              placeholder="Editora"
              className="input w-full max-w-sm my-2"
            />
            <div className="flex flex-row">
              <input
                type="number"
                placeholder="Ano Publicação"
                className="input w-full max-w-sm m-2"
              />
              <input
                type="number"
                placeholder="Número de Páginas"
                className="input w-full max-w-sm m-2"
              />
            </div>
            <input
              type="text"
              placeholder="Genêro/Categoria"
              className="input w-full max-w-sm my-2"
            />
            <input
              type="text"
              placeholder="Idioma"
              className="input w-full max-w-sm my-2"
            />
            <button className="btn btn-active btn-accent my-2">Salvar</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
