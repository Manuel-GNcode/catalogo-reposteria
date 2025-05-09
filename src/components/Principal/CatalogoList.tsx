import { Food } from "./Food";
import { CatalogoListProps } from "../../assets/types/interfaces";
import { EmptyFood } from "./EmptyFood";

export const CatalogoList = ({ foodList }: CatalogoListProps ) => {
  return (
    foodList.length > 0 ?
    <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-8 md:grid-cols-3">
      {foodList.map((item) => {
        return (
          <Food
            key={item.name + item.id}
            id={item.id}
            name={item.name}
            urlImg={item.urlImg}
            price={item.price}
          ></Food>
        );
      })}
    </div>
    : <EmptyFood></EmptyFood>
  );
};
