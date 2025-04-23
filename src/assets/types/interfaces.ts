export interface CatalogoItem {
  id: string;
  name: string;
  price: string;
  urlImg: string;
}

export interface CatalogoListProps {
  foodList: CatalogoItem[]
}

export interface ButtonProps {
  children: React.ReactNode,
  handleClick: ()=>void,
  classActive?: string
}