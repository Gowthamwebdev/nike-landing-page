import React from 'react'
import { offer } from '../assets/images'

export const Offers = () => {
  return (
    <section className='flex lg:flex-row justify-between max-container flex-col-reverse padding mt-6 relative'>
        <div className="left">
            <div className=' flex-1'>
                <img src={offer}
                 width={773}
                height={687}
                className=' w-full object-contain'
                alt="offers" />
            </div>
        </div>
       
        <div className="right">
        <h1 className='lg:text-4xl text-2xl pb-6 font-bold font-montserrat lg:py-6 top-5'><span className='text-coral-red'>Special</span> Offer</h1>
        <p className='mt-6 info-text text-xl text-slate-600'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier 
            selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p className=' text-xl text-slate-600 mt-6 info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest
                 expectations. Your journey with us is nothing short of exceptional.</p>
        </div>
    </section>
  )
}
