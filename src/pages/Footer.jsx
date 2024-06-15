import React from "react";
import { headerLogo } from "../assets/images";

export const Footer = () => {
  return (
    <section className="max-container items-center justify-center px-6 flex">
      <div>
        <div>
          <img src={headerLogo} alt="" />
          <p className="max-w-lg info-text text-slate-500">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <ul>{}</ul>
        </div>
      </div>
      <ul></ul>
      <ul></ul>
      <div></div>
    </section>
  );
};
