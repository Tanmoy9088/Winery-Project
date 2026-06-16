export type WineHome = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export interface ShopArray {
  name: string;
  description: string;
  price: number;
  image: string;
  isSold: boolean;
  category:string[];
}
export interface HighlighWine {
  id: number;
  image: string;
  name: string;
  description: string;
  date: string;
  location: string;
  category:string[];
}
