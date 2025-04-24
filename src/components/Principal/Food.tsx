import { CatalogoItem } from "../../assets/types/interfaces";
import { useState } from "react";

export const Food = ({ id, name, urlImg, price }: CatalogoItem) => {
  const [showModal, setShowModal] = useState(false);

  const handleShare = () => {
    const text = `En la repostería Dulce despertar ofrecemos ${name}, ven y pruébalo: www.catalogo.com`;
    navigator.clipboard.writeText(text).then(() => {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
    }).catch(err=>{
      alert('Ocurrió un error al copiar');
      console.error(err);
    });
  };
  
  return (
    <div
      id={name + id}
      className="bg-dark-purple relative pb-4 mr-[14px] text-center lg:mr-5"
    >
      <figure className="bg-grayish-blue mb-2">
        <img src={urlImg} width="720" height="960" alt={name} />
      </figure>
      <h2 className="text-intense-rose capitalize font-bold">{name}</h2>
      <h3 className="absolute bg-soft-blue-green rounded-xl px-4 border-2 border-dark-purple bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-dark-purple">
        $ {price}
      </h3>
      <button onClick={handleShare} aria-label="Botón para compartir página" className="absolute cursor-pointer top-0 right-0 -translate-y-1/2 translate-x-1/2">
        <div className='size-7 bg-center bg-cover bg-[url("/images/ui/iconos/compartir.webp")] hover:bg-[url("/images/ui/iconos/compartir_active.webp")] lg:size-10'></div>
      </button>

      {showModal && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-soft-blue-green text-dark-purple px-4 py-2 rounded-xl shadow-lg">
          ¡Texto copiado al portapapeles!
        </div>
      )}
    </div>
  );
};
