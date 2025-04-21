interface FoodProps {
  name: string;
  urlImg: string;
  price: string;
}

export const Food = ({name, urlImg, price}: FoodProps) => {
  return (
    <div className="bg-dark-purple relative pb-4 text-center">
      <img className="w-30 h-auto" src={urlImg} alt={name} />
      <h2 className="text-intense-rose capitalize">{name}</h2>
      <h3 className="absolute bg-soft-blue-green w-fit rounded-xl px-4 border-2 border-dark-purple bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-dark-purple">$ {price}</h3>
      <button className="absolute cursor-pointer top-0 right-0 -translate-y-1/2 translate-x-1/2"><div className='size-6 bg-center bg-cover bg-[url("/images/iconos/compartir.png")] hover:bg-[url("/images/iconos/compartir_active.png")]'></div></button>
    </div>
  )
}

