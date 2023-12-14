import React from "react";
import Essentials from "../../essentials.json";
import Link from "next/link";

function BetterIngredients() {
  const betterIng = [
    {
      title: "99 Vitamin Syrup",
      desc: "Our syrup is enriched with essential vitamins, including A, B-complex, C, and D, along with crucial minerals like zinc and selenium. The inclusion of natural antioxidants and botanical extracts ensures a holistic approach to supporting your overall health. Embrace the benefits of our meticulously curated blend, and give your body the nutrition it deserves with 99 Vitamin Syrup by Pesino Pharma.",
    },
    {
      title: "Pesivit Syrup",
      desc: "Packed with essential vitamins such as A, C, and D, Pesivit Syrup also includes vital minerals like zinc and iron to fortify your immune system and enhance overall vitality. Indulge in the goodness of Pesivit Syrup, a delicious and effective way to nourish your body with the nutrients it craves. Elevate your health journey with Pesivit Syrup - because your well-being deserves the best.",
    },
    {
      title: "Pesivit Syrup",
      desc: "Packed with essential vitamins such as A, C, and D, Pesivit Syrup also includes vital minerals like zinc and iron to fortify your immune system and enhance overall vitality. Indulge in the goodness of Pesivit Syrup, a delicious and effective way to nourish your body with the nutrients it craves. Elevate your health journey with Pesivit Syrup - because your well-being deserves the best.",
    },
    {
      title: "Pesivit Syrup",
      desc: "Packed with essential vitamins such as A, C, and D, Pesivit Syrup also includes vital minerals like zinc and iron to fortify your immune system and enhance overall vitality. Indulge in the goodness of Pesivit Syrup, a delicious and effective way to nourish your body with the nutrients it craves. Elevate your health journey with Pesivit Syrup - because your well-being deserves the best.",
    },
    {
      title: "Pesivit Syrup",
      desc: "Packed with essential vitamins such as A, C, and D, Pesivit Syrup also includes vital minerals like zinc and iron to fortify your immune system and enhance overall vitality. Indulge in the goodness of Pesivit Syrup, a delicious and effective way to nourish your body with the nutrients it craves. Elevate your health journey with Pesivit Syrup - because your well-being deserves the best.",
    },
  ];
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-8 px-20">
      <div className="p-4">
        <div className="flex flex-col ">
          <div className="title text-2xl font-normal tracking-widest ">
            {Essentials.ing}
          </div>
          <div className="salutation font-normal leading-normal text-5xl">
            <p> {Essentials.bi}</p>
          </div>
          <div className="desc w-96 text-2xl font-normal not-italic leading-normal">
            <p> {Essentials.biDesc}</p>
          </div>
        </div>
      </div>
      {betterIng?.map((el) => (
        <div className="p-4 flex flex-col bg-home-start">
          <div className="p-4 flex flex-col gap-4 justify-center items-start h-full">
            <div className="font-medium not-italic text-3xl">
              <h1>{el?.title}</h1>
            </div>
            <div className="font-normal not-italic text-xl ">
              <p>{el?.desc}</p>
            </div>
            <div className="flex items-end h-full">
              <Link href="/products">
                <h1 className="text-black text-lg  font-medium decoration-solid  underline underline-offset-4">
                  VIEW PRODUCT
                </h1>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BetterIngredients;
