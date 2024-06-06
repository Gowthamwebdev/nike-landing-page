import React from 'react'

export const ReviewCard = (item) => {
  return (
    
    <div className='flex items-center justify-center gap-6 flex-col h-[512px] w-[420px]  rounded-lg lg:mx-12 '>
        <div className="flex ">
            <img className='rounded-full w-[10rem] h-[10rem]' src={item.imgURL} alt={item.label} width={210} height={210} />
        </div>
        <h1 className='text-3xl font-bold '>{item.label}</h1>
        <p className=' lg:max-w-xs text-center px-6 font-serif text-xl text-slate-600'>{item.subtext}</p>
    
    </div>
  )
}
