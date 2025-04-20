import { catalogo} from "../assets/database";
import { Food } from "../components/Food";

export const Desayunos = () => {
  return (
    <section className="grid grid-cols-2 justify-items-center gap-y-8 mb-6">
      {catalogo.desayunos.map(item=>{
        return (
          <Food key={item.id} name={item.name} urlImg={item.urlImg} price={item.price}></Food>
        )
      })}
    </section>
  )
}