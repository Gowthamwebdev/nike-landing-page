export const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="items-center w-11 h-11 bg-coral-red justify-center flex rounded-full">
      <img src={imgURL} width={24} height={24} alt={label} />
      </div>
      <h2 className="text-2xl font-bold font-montserrat">{label}</h2>
      <p className="text-xl text-slate-400">{subtext}</p>
    </div>
  )
}