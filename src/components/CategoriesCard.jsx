
const CategoriesCard = ({imgURL, name, number}) => {
  return (
    
    <div className="flex flex-col w-full max-sm:w-full enlarge-animate object-cover cursor-pointer">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-280px"
        />
        <div className="flex space-x-[39px] mt-[102px] items-end text-white font-bold md:absolute">
          <p className="text-[152px] ">{number}</p> 
           <p className="font-medium pb-[66px] "> {name} </p>
        </div>


    </div>
  )
}

export default CategoriesCard