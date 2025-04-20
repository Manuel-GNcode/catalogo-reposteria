export const Hero = () => {
  return (
    <section className="relative h-[300px]">
      <img className="h-full w-full object-center object-cover" src="images/banner_promocion.png" alt="Banner de promoción" />

      <button className=" bg-dark-purple text-soft-blue-green text-xl rounded-3xl px-8 py-1 absolute bottom-6 left-1/2 translate-x-[-50%] cursor-pointer border-4 border-dark-purple hover:bg-soft-blue-green hover:text-dark-purple whitespace-nowrap font-bold">Conseguir cupón</button>
    </section>
  )
}
