export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white flex justify-center items-center gap-x-8 py-8">
      <div className="footer_div text-4xl">
        <a href='#' ><i>⭐</i></a>
        <span className="flex gap-x-4">
          <a href='#' ><i>🍔</i></a>
          <a href='#' ><i>🍟</i></a>
          <a href='#' ><i>🌭</i></a>
        </span>
      </div>

      <div className="footer_div">
        <i className="text-4xl">🗺</i>
        <span>
          <p>Dirección</p>
          <p>guau guau</p>
        </span>
      </div>

      <div className="footer_div">
        <i className="text-4xl">📱</i>
        <span>
          <p>celular</p>
          <p>+57 3118739864</p>
        </span>
      </div>

      <div className="footer_div">
        <i className="text-4xl">☠</i>
        <span>
          <p>creado por</p>
          <p>guau guau</p>
        </span>
      </div>
    </footer>
  )
}
