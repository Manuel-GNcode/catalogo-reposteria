export const Suscribete = () => {
  return (
    <article className="bg-dark-purple p-4 mx-6 mt-2 rounded-[30px] flex gap-4 text-soft-blue-green mb-6 items-center justify-center sm:mx-10 sm:p-8 sm:rounded-[50px] lg:mx-30 lg:rounded-[64px]">
      <img
        className="w-[40%] max-w-[250px] object-contain"
        src="images/ui/banners/banner_suscribete.png"
        alt="Carta con logo"
      />
      <div className="w-[60%] max-w-[450px]">
        <h2 className="text-2xl font-bold">¡Suscríbete!</h2>
        <p className="text-sm">
          Registra tu correo para recibir nuestras últimas ofertas y eventos
        </p>
        <form className="mt-2" action="#">
          <div className="flex gap-2 bg-soft-blue-green rounded-2xl py-1 px-2">
            <input
              className="bg-white rounded-xl w-full outline-0 text-dark-purple px-2"
              type="email"
              name="email"
              id="email"
            />
            <button type="submit" className="cursor-pointer">
              <img
                className="h-4"
                src="images/ui/iconos/enviar.png"
                alt="botón de enviar"
              />
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};
