import React from "react";
import { headerLogo } from "../assets/images";
import { Medias, Navitems, products } from "../utils/Data";

export const Footer = () => {
  return (
    <section className="max-container items-center justify-center flex">
      <div className=" flex flex-col gap-6">
        <div>
          <img src={headerLogo} alt="" className="mb-6" />
          <p className="max-w-lg info-text text-slate-200">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
        </div>

        <div className="flex flex-row gap-[5rem] cursor-pointer ">
          <ul>
            {Medias.map((item) => {
              return (
                <li className="" key={item.label}>
                  <div className=" inline-flex text-slate-50 gap-2">
                    {" "}
                    <img className=" " src={item.imgURL} alt={item.label} />
                    <a href={item.href}>{item.label}</a>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul>
            {products.map((product) => {
              return (
                <li className="" key={product.name}>
                  <div className=" inline-flex text-slate-50 gap-2">
                    <a href={product.href}>{product.name}</a>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className=" text-slate-100">
            {Navitems.map((item) => {
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>;
            })}
          </ul>
          <div></div>
        </div>
      </div>
    </section>
  );
};
