import {arrowSection} from "../assets/icons"

const SectionBodyCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-280px"
        />
        <div className="text-white absolute p-3 mt-[13rem]">

          <p className=" font-light text-sm">{name}</p> 

          <div className=" flex justify-between items-stretch">
           <p className="font-bold pb-9"> {price} </p>

           <img
            src={arrowSection} 
            alt="right arrow"
            className="ml-2 text-slate-50 rounded-full w-5 h-5"
            />
           </div>
           
        </div>

        </div>
  )
}

export default SectionBodyCard