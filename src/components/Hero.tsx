export const Hero = () => {
  return (
    <section className="relative h-87 sm:px-10 sm:h-100 lg:px-30 lg:h-120">
      <img className="h-full w-full object-cover" src="images/ui/banners/banner_promocion.png" alt="Banner de promoción" />

      <button className=" bg-dark-purple text-soft-blue-green text-2xl rounded-3xl px-8 py-1 absolute bottom-6 left-1/2 translate-x-[-50%] cursor-pointer border-4 border-dark-purple hover:bg-soft-blue-green hover:text-dark-purple whitespace-nowrap font-bold sm:text-3xl lg:text-4xl lg:bottom-12">Conseguir cupón</button>
    </section>
  )
}
