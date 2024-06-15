import { customer1, customer2 } from "../assets/images";
import { ReviewCard } from "../components/ReviewCard";
import { Reviews } from "../utils/Data";
export const Review = () => {
  return (
    <section className="flex items-center justify-center flex-col max-container bg-slate-100 p-20">
      <h1 className="mb-8 text-4xl font-bold font-montserrat">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h1>
      <p className=" text-slate-600 tex t-lg max-w-lg text-center mb-8 info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-col gap-12 lg:flex-row">
        {Reviews.map((item) => (
          <ReviewCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
};
