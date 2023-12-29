import { messageIcon } from "../assets/icons"
const MessageButton = () => {
  return (
    <button className="flex justfiy-center items-center mt-5 gap-3 px-5 py-[14px] border  font-montserrat text-lg leading-none bg-black rounded-[5px] text-white">

      <img
       src={messageIcon} 
       alt="arrow right"
       className="ml-2 rounded-full w-5 h-5"
       />
       Message

   </button>
  )
}

export default MessageButton