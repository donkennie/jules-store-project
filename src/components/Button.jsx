
const Button = ({label, iconURL}) => {
  return (
   <button className="flex justfiy-center items-center mt-5 gap-3 px-6 py-2 border font-montserrat text-lg leading-none bg-white rounded-[5px] text-black">
      {label}

      <img
       src={iconURL} 
       alt="arrow right"
       className="ml-2 rounded-full w-5 h-5"
       />
   </button>
  )
}

export default Button