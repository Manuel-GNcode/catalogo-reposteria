import { Food } from "./Food";

interface FoodItem {
  id: string;
  name: string;
  urlImg: string;
  price: string;
}

export const CatalogoList = ({foodList}: { foodList: FoodItem[] }) => {
  return (
    <section className="grid grid-cols-2 justify-items-center gap-y-8 mb-6">
      {foodList.map(item=>{
        return (
          <Food key={item.name+item.id} name={item.name} urlImg={item.urlImg} price={item.price}></Food>
        )
      })}
    </section>
  )
}