import React from "react";
import Essentials from "../../essentials.json";
import Link from "next/link";
import AOSComponent from "@/components/aos/AOS";

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
      title: "Pesiplex Syrup",
      desc: "Pesiplex Syrup is crafted with a commitment to excellence, featuring a unique blend of premium, high-quality ingredients. Our formulation is designed to provide optimal health benefits, ensuring a superior and effective solution. Discover the difference with Pesiplex Syrup, where better ingredients contribute to your well-being. Trust in the power of quality ingredients for a healthier you.",
    },
    {
      title: "Dinextar",
      desc: "Experience the epitome of technical excellence with Dinextar's cutting-edge formulations. Our commitment to superior products starts with the meticulous selection of advanced and scientifically proven ingredients. We employ a rigorous process to ensure each component meets the highest standards for purity, potency, and bioavailability. Dinextar's dedication to technical precision guarantees that you receive the utmost benefits from our products, where every ingredient is chosen with a focus on efficacy and optimal performance for your well-being",
    },
    {
      title: "Diclomol",
      desc: "Diclomol tablets typically contain diclofenac, a nonsteroidal anti-inflammatory drug (NSAID), and paracetamol (acetaminophen), an analgesic and antipyretic. These ingredients work together to reduce inflammation, alleviate pain, and lower fever. For specific dosages and instructions, refer to the product packaging or consult with healthcare professionals.",
    },
  ];
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-8 px-4 md:px-0  container mx-auto">
      <div className="p-4">
        <div className="flex flex-col ">
          <div className="title text-2xl font-normal tracking-widest ">
            {Essentials.ing}
          </div>
          <div className="salutation font-normal leading-normal text-5xl">
            <p> {Essentials.bi}</p>
          </div>
          <div className="desc max-w-96 text-2xl font-normal not-italic leading-normal">
            <p> {Essentials.biDesc}</p>
          </div>
        </div>
      </div>
      {betterIng?.map((el) => (
        <AOSComponent>
          <div className="p-4 flex flex-col bg-home-start" data-aos="fade-up">
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
        </AOSComponent>
      ))}
    </div>
  );
}

export default BetterIngredients;
