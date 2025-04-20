export const Header = () => {
  return (
    <header className="flex flex-col gap-6 px-12 py-6 items-center">
      <img src="images/logo.png" alt="Logo dulce despertar" className=""/>

      <div className="flex gap-4 relative">
        <a href="#">
          <span className='block size-8 bg-center bg-cover bg-[url("../../public/images/iconos/instagram.png")] hover:bg-[url("../../public/images/iconos/instagram_active.png")]'></span>
        </a>
        <a href="#">
          <span className='block size-8 bg-center bg-cover bg-[url("../../public/images/iconos/youtube.png")] hover:bg-[url("../../public/images/iconos/youtube_active.png")]'></span>
        </a>
        <a href="#">
          <span className='block size-8 bg-center bg-cover bg-[url("../../public/images/iconos/pinterest.png")] hover:bg-[url("../../public/images/iconos/pinterest_active.png")]'></span>
        </a>
        <span className="absolute w-[150%] h-2 bg-soft-blue-green top-1/2 left-1/2 translate-[-50%] -z-1 rounded-sm"></span>
      </div>
    </header>
  );
};
