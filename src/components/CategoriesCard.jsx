
const CategoriesCard = ({imgURL, name, number}) => {
  return (
    
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-280px"
        />
        <div className="flex space-x-[4rem] mt-[150px] items-end text-white font-bold md:absolute">
          <p className="text-[7rem]">{number}</p> 
           <p className="font-medium pb-9 "> {name} </p>
        </div>

    </div>
  )
}

export default CategoriesCard