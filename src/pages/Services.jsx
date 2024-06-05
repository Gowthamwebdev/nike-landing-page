import { services } from "../utils/Data"
import { ServicesCard } from '../components/ServicesCard';

export const Services  = () => {
  return (
    <section className='max-container flex justify-center lg:flex-row flex-col w-full my-[5rem] '>
{services.map((service)=>(
    <ServicesCard key={service.label} {...service}/>
))}
    </section>
  )
}
