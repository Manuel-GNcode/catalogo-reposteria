export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center gap-x-8 bg-gray-800 text-sm text-white">
      <div className="footer_div">
        <a href='#' ><i>⭐</i></a>
        <span className="flex gap-x-4">
          <a href='#' ><i>🍔</i></a>
          <a href='#' ><i>🍟</i></a>
          <a href='#' ><i>🌭</i></a>
        </span>
      </div>

      <div className="footer_div">
        <i className="">🗺</i>
        <span>
          <p>Dirección</p>
          <p>guau guau</p>
        </span>
      </div>

      <div className="footer_div">
        <i className="">📱</i>
        <span>
          <p>celular</p>
          <p>+57 3118739864</p>
        </span>
      </div>

      <div className="footer_div">
        <i className="">☠</i>
        <span>
          <p>creado por</p>
          <p>guau guau</p>
        </span>
      </div>
    </footer>
  )
}
