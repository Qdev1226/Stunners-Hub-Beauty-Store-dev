import { v4 as uuid } from "uuid";
import makeup from "../../assets/Images/makeup.jpg";
import skincare from "../../assets/Images/skin.jpg";
import haircare from "../../assets/Images/hair.jpg";
import fragrances from "../../assets/Images/Fragrances.jpg";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Makeup",
    image: makeup
  },
  {
    _id: uuid(),
    categoryName: "Skincare",
    image:skincare
  },
  {
    _id: uuid(),
    categoryName: "Haircare",
    image:haircare
  },
  {
    _id: uuid(),
    categoryName: "Fragrances",
    image:fragrances
  },
];
