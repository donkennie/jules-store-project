import {arrowSection} from "../assets/icons"

const SectionBodyCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full object-cover hover:shadow-lg dark:hover:shadow-black/30 enlarge-animate">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-280px"
        />
        <div className="mt-[5rem] text-white absolute p-[6px] xs:mt-5 space-y-2 lg:mt-[12rem]">  
        
          <p className=" font-light xs:font-bold text-sm">{name}</p> 

          <div className=" flex justify-between">
           <p className="font-bold pb-9"> {price} </p>

           <img
            src={arrowSection} 
            alt="right arrow"
            className="ml-2 text-slate-50 rounded-full w-5 h-5 animate-pulse"
            />
           </div>
           
        </div>

        </div>
  )
}

export default SectionBodyCard