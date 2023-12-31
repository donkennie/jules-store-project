
const CategoriesCard = ({imgURL, name, number}) => {
  return (
    
    <div className="flex flex-col w-full max-sm:w-full enlarge-animate object-cover cursor-pointer">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-280px"
        />
        <div className="flex md:space-x-[39px] xl:mt-[74px] pt-[-90px] items-end text-white font-bold absolute">
          <p className="md:text-[152px] text-[29px] font-bold pt-6 ">{number}</p> 
           <p className="lg:font-medium xs:font-light xs:text-[0px] pt-4 md:pb-[66px] lg:pb-[66px] pb-[13px]"> {name} </p>
        </div>
        {/* <div className="flex md:space-x-[39px]  xl:mt-[74px] pt-[-90px]  text-white absolute">
          <p className="md:text-[152px] text-[29px] font-bold pt-6 ">{number}</p> 
           <p className="lg:font-medium xs:font-light xs:text-[0px] pt-4 md:pb-[66px] lg:pb-[66px] pb-[13px]"> {name} </p>
        </div> */}


    </div>
  )
}

export default CategoriesCard