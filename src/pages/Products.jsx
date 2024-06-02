import React from "react";
import { products } from "../utils/Data";
import { ProductCard } from "../components/ProductCard";

export const Products = () => {
  return (
    <section className="max-container max-sm:mt-12">
        <div className="flex my-auto items-start justify-start flex-col">
        <h2 className="text-4xl font-mono" >
        Our <span className="text-coral-red"> Popular </span>  products
      </h2>
        <p className="leading-8 mt-4 font-montserrat lg:max-w-lg text-md text-slate-400 ">
        Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
        </div>

        <div className="grid mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((item) => (
            <ProductCard key={item.name} {...item}/>
        ))}
        </div>

        
      
    </section>
  );
};
