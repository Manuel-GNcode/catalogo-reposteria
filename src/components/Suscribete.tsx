
export const Suscribete = () => {
  return (
    <article className="bg-dark-purple p-8 rounded-3xl flex gap-4 text-soft-blue-green mx-6 mb-6 items-center max-w-[400px] mx-auto">
      <img className="w-[40%] object-contain" src="images/ui/banners/banner_suscribete.png" alt="Carta con logo" />
      <div className="w-[60%]">
        <h2 className="text-2xl font-bold">¡Suscríbete!</h2>
        <p className="text-sm">Registra tu correo para recibir nuestras últimas ofertas y eventos</p>
        <form className="mt-2" action="#">
          <div className="flex gap-2 bg-soft-blue-green rounded-2xl py-1 px-2">
          <input className="bg-white rounded-xl w-full outline-0 text-dark-purple px-2" type="email" name="email" id="email" />
          <button type="submit">
            <img className="h-5" src="images/ui/iconos/enviar.png" alt="botón de enviar" />
          </button>
          </div>
        </form>
      </div>
    </article>
  )
}
