export const Header = () => {
  return (
    <header className="bg-amber-50 w-full flex flex-col items-center pt-10 pb-4">
      <div className="w-[375px] p-4 flex flex-col items-center gap-6 border-b-2">
        <div className="flex items-center">
          <p className="text-7xl">⭐</p>
          <p className="text-4xl w-[200px]">Hola, hambriento!</p>
        </div>

        <nav className="flex gap-10">
          <a
            className="bg-gray-800 text-white rounded-4xl px-6 py-1"
            href="#"
          >
            Ofertas
          </a>
          <a
            className="bg-gray-800 text-white rounded-4xl px-6 py-1"
            href="#"
          >
            Productos
          </a>
        </nav>
      </div>
      <h1 className="font-bold tracking-wider text-3xl">
        Catálogo de postres
      </h1>
    </header>
  );
};
