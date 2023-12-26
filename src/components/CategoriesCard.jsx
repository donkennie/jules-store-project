
const CategoriesCard = ({imgURL, name, number}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-280px"
        />

        <div className="flex space-x-6">
          <p>{number}</p> 
           <p> {name} </p>
        </div>
    </div>
  )
}

export default CategoriesCard