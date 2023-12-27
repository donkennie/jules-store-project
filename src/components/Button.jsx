
const Button = ({label, iconURL}) => {
  return (
   <button className="flex justfiy-center items-center mt-5 gap-3 px-7 py-[14px] border border-l-red-500 border-t-red-500 font-montserrat text-lg leading-none bg-white rounded-[5px] text-black">
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