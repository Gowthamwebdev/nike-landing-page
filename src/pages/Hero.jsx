import { useState } from "react";
import { arrowRight } from "../assets/icons";
import {  Statistics } from "../utils/Data";
import { Shoes } from '../utils/Data';
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full h-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="flex flex-col items-start xl:w-2/5 relative justify-center w-full max-xl:padding-x pt-20">
        <p className="text-xl font-motserrat text-coral-red ">
          Our Winter collections
        </p>
        <h1 className="mt-10 text-8xl max-sm:text-[4.5rem] max-sm: leading-[5rem] font-bold">
          <span className="relative mt-10 xl:bg-white xl:whitespace-nowrap z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-4">Nike </span> Shoes
        </h1>
        <p className="mt-8 text-xl text-slate-500 leading-8  mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <button className="bg-coral-red px-8 py-4 rounded-full text-2xl text-white-400 flex ">
          Shop Now
          <img
            src={arrowRight}
            className="ml-2 rounded-full bg-white w-5 h-5 mt-1"
            alt="arrow"
          />
        </button>

        <div className="flex items-start justify-start gap-16 mt-16 flex-wrap w-full">
          {Statistics.map((item) => (
            <div key={item.value}>
              <p className="text-4xl font-bold">{item.value}</p>
              <p className="text-xl text-slate-500 font-mono">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center mt-6 items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'">
        <img
          src={bigShoeImg}
          alt="Shoe img"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {Shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
