export const Message = ({text, type}:{text:string;type:boolean}) => {
  return (
    <p
    className={`absolute mt-2 text-sm font-bold ${
      type ? "text-soft-blue-green" : "text-intense-rose"
    }`}
  >
    {text}
  </p>
  )
}
