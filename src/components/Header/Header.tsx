export const Header = () => {
  return (
    <header className="flex flex-col gap-6 p-6 items-center sm:flex-row sm:justify-between sm:items-end sm:px-10 lg:px-30 lg:py-4">
      <img width="451" height="204" src="logo.webp" alt="Logo dulce despertar" className="h-auto w-60 lg:w-35"/>

      <div className="flex gap-3 relative w-30 sm:pb-4 lg:w-25">
        <a href="#" aria-label="Ir a Instagram" className='grow aspect-1/1 bg-cover bg-[url("/images/ui/iconos/instagram.webp")] hover:bg-[url("/images/ui/iconos/instagram_active.webp")]'>
        </a>
        <a href="#" aria-label="Ir a Youtube" className='grow aspect-1/1 bg-cover bg-[url("/images/ui/iconos/youtube.webp")] hover:bg-[url("/images/ui/iconos/youtube_active.webp")]'>
        </a>
        <a href="#" aria-label="Ir a Pinterest" className='grow aspect-1/1 bg-cover bg-[url("/images/ui/iconos/pinterest.webp")] hover:bg-[url("/images/ui/iconos/pinterest_active.webp")]'>
        </a>
        <span className="absolute w-[160%] h-2 bg-soft-blue-green top-1/2 left-1/2 translate-[-50%] -z-1 rounded-sm sm:w-45 sm:-translate-x-15 sm:-translate-y-2 sm:top-full sm:left-0 lg:-translate-x-20"></span>
      </div>
    </header>
  );
};
