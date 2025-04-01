export const Header = () => {
  return (
    <div className="pt-12 px-10 pb-4 bg-amber-100">
      <div className="flex items-center gap-4 w-fit mx-auto">
        <p className="text-6xl">⭐</p>
        <p className="text-4xl w-[200px]">Hola, hambriento!</p>
      </div>
      <div className="flex justify-between mt-4 border-b-2 pb-2">
        <a className="bg-amber-800 text-amber-50 font-bold rounded-2xl px-6 py-1" href="#">Ofertas</a>
        <a className="bg-amber-800 text-amber-50 font-bold rounded-2xl px-6 py-1" href="#">Productos</a>
      </div>
      <h1 className="text-3xl font-bold text-center mt-4">Catálogo de postres</h1>
    </div>
  )
}
