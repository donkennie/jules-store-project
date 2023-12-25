
const Button = ({label, iconURL}) => {
  return (
   <button className="flex justfiy-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white rounded-2xl text-black">
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