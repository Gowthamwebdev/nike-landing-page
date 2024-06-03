import { shoe8 } from "../assets/images";

export const About = () => {
  return (
    <section className="w-full max-container flex flex-col lg:flex-row items-center justify-between pt-16 lg:px-4">
      <div className="flex flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className=" text-slate-500 lg:max-w-lg info-text pt-6 lg:pt-12 text-xl">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="text-slate-500 lg:max-w-lg text-xl pt-6 lg:pt-12 info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
      </div>
      <div className="flex items-center justify-center pt-4">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};
