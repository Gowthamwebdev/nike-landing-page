import { star } from "../assets/icons";

export const ProductCard = (item) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center">
      <img src={item.imgURL} alt={item.name} className='w-[282px] h-[282px]'/>
      <div className="flex flex-row gap-3 mt-4 ">
        <img src={star} alt="rating" className="w-[1.2rem] h-[1.2rem]" />
        <p className=" text-slate-500">(4.5)</p>
      </div>
      <p className="pt-2 text-xl font-bold pb-2">{item.name}</p>
      <span className="text-coral-red text-md font-bold text-xl">{item.price}</span>
    </div>
  );
};
