export const Header = () => {
  return (
    <header className="flex flex-col gap-6 px-12 py-6 items-center">
      <img src="logo.png" alt="Logo dulce despertar" className=""/>

      <div className="flex gap-4 relative">
        <a href="#">
          <span className='block size-8 bg-center bg-cover bg-[url("/images/ui/iconos/instagram.png")] hover:bg-[url("/images/ui/iconos/instagram_active.png")]'></span>
        </a>
        <a href="#">
          <span className='block size-8 bg-center bg-cover bg-[url("/images/ui/iconos/youtube.png")] hover:bg-[url("/images/ui/iconos/youtube_active.png")]'></span>
        </a>
        <a href="#">
          <span className='block size-8 bg-center bg-cover bg-[url("/images/ui/iconos/pinterest.png")] hover:bg-[url("/images/ui/iconos/pinterest_active.png")]'></span>
        </a>
        <span className="absolute w-[150%] h-2 bg-soft-blue-green top-1/2 left-1/2 translate-[-50%] -z-1 rounded-sm"></span>
      </div>
    </header>
  );
};
