import { MessageButton } from "../components"
const Footer = () => {
  return (
    <section className="flex flex-col text-center space-y-10">
      <div className="flex justify-center">
        <MessageButton/>
      </div>
      <div className=" border text-black">

      </div>

      <p className="font-montserrat text-lg">
        © 2023 All rights reserved.
      </p>
    </section>
  )
}

export default Footer