import { customer1, customer2 } from "../assets/images"
import { ReviewCard } from "../components/ReviewCard"
import { Reviews } from "../utils/Data"
export const Review = () => {
  return (
    <section className="flex items-center justify-center max-container">
        <div className="flex flex-col lg:flex-row">
            {Reviews.map((item) => (
                <ReviewCard  key={item.label} {...item}/>
            ))}
        </div>
    </section>
  )
}
