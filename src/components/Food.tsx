import { CatalogoItem } from "../assets/interfaces";

export const Food = ({ id, name, urlImg, price }: CatalogoItem) => {
  return (
    <div
      id={name + id}
      className="bg-dark-purple relative pb-4 mr-[14px] text-center lg:mr-5"
    >
      <img src={urlImg} alt={name} />
      <h2 className="text-intense-rose capitalize">{name}</h2>
      <h3 className="absolute bg-soft-blue-green rounded-xl px-4 border-2 border-dark-purple bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-dark-purple">
        $ {price}
      </h3>
      <button className="absolute cursor-pointer top-0 right-0 -translate-y-1/2 translate-x-1/2">
        <div className='size-7 bg-center bg-cover bg-[url("/images/ui/iconos/compartir.png")] hover:bg-[url("/images/ui/iconos/compartir_active.png")] lg:size-10'></div>
      </button>
    </div>
  );
};
