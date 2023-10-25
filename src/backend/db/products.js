import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Eye Look Combo- Mascara + Eyeliner + Kajal",
    price: "275",
    categoryName: "Makeup",
    rate: 4,
    discount: "5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/a/9a6872bNYNYKBC001512_1.jpg",
  },
  {
    _id: uuid(),
    name: "Lakme Eyeconic Kajal - Regal Green",
    price: "234",
    categoryName: "Makeup",
    rate: 3,
    discount: "10",
    image:
      "https://images-static.nykaa.com/media/catalog/product/3/3/33ef0c5NYKAC00000132_0.jpg",
  },
  {
    _id: uuid(),
    name: "Maybelline New York Fit Me Matte+Poreless Liquid Foundation With Clay - 115 Ivory",
    price: "507",
    categoryName: "Makeup",
    rate: 4,
    discount: "5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/6/6/66e3c566902395646860_new_1.jpg",
  },
  {
    _id: uuid(),
    name: "Lakme Absolute White Intense Wet & Dry Compact - 01 Classic Ivory",
    price: "700",
    categoryName: "Makeup",
    rate: 4,
    discount: "8",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/2/22680_s1-8901030366734m.jpg",
  },
  {
    _id: uuid(),
    name: "Nykaa Matte to Last! Transfer Proof Liquid Lipstick - IT Girl - 06",
    price: "499",
    categoryName: "Makeup",
    rate: 4,
    discount: "3",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245704209_1_3.jpg",
  },
  {
    _id: uuid(),
    name: "Kay Beauty Matte Action Lip Liner - Sensational",
    price: "468",
    categoryName: "Makeup",
    rate: 4,
    discount: "15",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/3/0380cf5kay_mtalp_1.jpg",
  },
  {
    _id: uuid(),
    name: "Kay Beauty Nail Nourish Nail Enamel Polish - Hibiscus 28",
    price: "180",
    categoryName: "Makeup",
    rate: 4,
    discount: "3",
    image:
      "https://images-static.nykaa.com/media/catalog/product/d/a/dad5c788904330901278_1.jpg",
  },
  {
    _id: uuid(),
    name: "Lakme Color Crush Nail Art - S8",
    price: "132",
    categoryName: "Makeup",
    rate: 3,
    discount: "5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/1/d/1d0bf218901030715938_1.jpg",
  },
  {
    _id: uuid(),
    name: "MCaffeine Complete Coffee Skin Care Combo",
    price: "915",
    categoryName: "Skincare",
    rate: 4,
    discount: "10",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/a/fab9509nymcfcom00030_1.jpg",
  },
  {
    _id: uuid(),
    name: "Simple Kind To Skin Micellar Cleansing Water + Wipes",
    price: "617",
    categoryName: "Skincare",
    rate: 3,
    discount: "20",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/8/68f3dc127280+27282_1.jpg",
  },
  {
    _id: uuid(),
    name: "NIVEA Body Lotion, Aloe Hydration, with Aloe Vera, for Smooth, Hydrated Skin",
    price: "220",
    categoryName: "Skincare",
    rate: 4,
    discount: "3",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/4/b4515ae8904256002479new.jpg",
  },
  {
    _id: uuid(),
    name: "Cetaphil Baby Mild Bar",
    price: "180",
    categoryName: "Skincare",
    rate: 3,
    discount: "10",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/5/35979108904027305815_1.jpg",
  },
  {
    _id: uuid(),
    name: "L'Oreal Professionnel Absolut Repair Shampoo with Protein and Gold Quinoa, Serie Expert",
    price: "695",
    categoryName: "Haircare",
    rate: 2,
    discount: "20",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/9/0938a71nyloprof00002_0.jpg",
  },
  {
    _id: uuid(),
    name: "Livon Hair Serum for Women & Men| All Hair Types |Smooth, Frizz free & Glossy Hair",
    price: "100",
    categoryName: "Haircare",
    rate: 4,
    discount: "1",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4991c9c8901088062374_1.jpg",
  },
  {
    _id: uuid(),
    name: "Moi By Nykaa Matin Eau de Perfume",
    price: "800",
    categoryName: "Fragrances",
    rate: 4,
    discount: "5",
    image:
      "https://images-static.nykaa.com/media/catalog/product/1/3/1359e368904245710668_1.jpg",
  },
  {
    _id: uuid(),
    name: "Guerlain Aqua Allegoria Flora Cherrysia Eau De Toilette",
    price: "1000",
    categoryName: "Fragrances",
    rate: 4,
    discount: "10",
    image:
      "https://images-static.nykaa.com/media/catalog/product/g/0/g013652.jpg",
  },
  {
    _id: uuid(),
    name: "NIVEA Women Deodorant, Fresh Flower, Long Lasting Freshness & 48h Protection",
    price: "200",
    categoryName: "Fragrances",
    rate: 3,
    discount: "4",
    image:
      "https://images-static.nykaa.com/media/catalog/product/7/f/7f6ea964005900243249_1a.jpg",
  },
  {
    _id: uuid(),
    name: "Nykaa Wanderlust Deodorant Spray - Mediterranean Sea Salt",
    price: "400",
    categoryName: "Fragrances",
    discount: "10",
    rate: 1,
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245713867_1_1_1.jpg",
  },
];
