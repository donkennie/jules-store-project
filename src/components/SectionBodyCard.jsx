

const SectionBodyCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-280px"
        />
        <div className="flex space-x-[4rem] content-start items-baseline text-white md:absolute bottom-[42px]">
          <p className="">{name}</p> 
           <p className="font-medium pb-9"> {price} </p>
           {/* <p className="">{arrow}</p> */}
        </div>

        </div>
  )
}

export default SectionBodyCard