export const Footer = () => {
  return (
    <footer className="bg-dark-purple p-6 text-soft-blue-green">
      <div className="flex justify-between items-center gap-6 border-b-2 border-b-soft-blue-green pb-4 max-w-[400px] mx-auto">
        <div className="flex flex-col items-center gap-2 px-4 flex-1">
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

        <div className="flex-1 text-[12px]">
          <div className="flex gap-2 items-center">
            <img className="object-contain w-6" src="images/ui/iconos/ubicacion.png" alt="Ubicación" />
            <div>
              <p>Cra. 15 #6-89</p>
              <p>Barrio El Madrigal</p>
              <p>Utopía, Colombia</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img className="object-contain w-6" src="images/ui/iconos/whatsapp.png" alt="Whatsapp" />
            <p>¡Contáctanos!</p>
          </div>
        </div>
      </div>

      <address className="text-center">
        <p>Creado por Mau</p>
      </address>
    </footer>
  )
}
