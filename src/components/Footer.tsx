export const Footer = () => {
  return (
    <footer className="bg-dark-purple p-6 text-soft-blue-green sm:px-10 lg:px-30 flex flex-col gap-2 md:flex-row md:items-center md:gap-6 md:justify-center">
      <div className="flex justify-between items-center gap-6 border-b-2 border-b-soft-blue-green pb-4 md:pb-0 md:border-b-0">
        <div className="flex flex-col items-center gap-2 px-4 w-40 sm:flex-row sm:w-60">
          <img className="w-16 h-auto" src="logo_footer.png" alt="Logo" />
          <div className="relative z-1 flex gap-2 px-4">
            <a href="#" target="_BLANK">
              <img src="images/ui/iconos/instagram_active.png" alt="Instagram" />
            </a>
            <a href="#" target="_BLANK">
              <img src="images/ui/iconos/youtube_active.png" alt="Instagram" />
            </a>
            <a href="#" target="_BLANK">
              <img src="images/ui/iconos/pinterest_active.png" alt="Instagram" />
            </a>
            <span className="absolute w-full h-2 rounded-xl bg-soft-blue-green -z-1 left-1/2 top-1/2 -translate-1/2"></span>
          </div>
        </div>

        <div className="text-[12px] flex flex-col gap-2 sm:flex-row sm:gap-6">
          <div className="flex gap-2 items-center">
            <img className="object-contain w-4" src="images/ui/iconos/ubicacion.png" alt="Ubicación" />
            <div>
              <p>Cra. 15 #6-89</p>
              <p>Barrio El Madrigal</p>
              <p>Utopía, Colombia</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img className="object-contain w-4" src="images/ui/iconos/whatsapp.png" alt="Whatsapp" />
            <p>¡Contáctanos!</p>
          </div>
        </div>
      </div>

      <address className="text-center md:border-l-2 md:border-l-soft-blue-green md:pl-6">
        <p>Creado por Mau</p>
      </address>
    </footer>
  )
}
