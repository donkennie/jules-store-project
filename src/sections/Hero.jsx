import Button from "../components/Button";
import {rightSideArrow} from "../assets/icons";
import {image6} from "../assets/images";

const Hero = () => {
  return (
    <section className="max-container w-full xl:flex-row md:flex flex-row bg-black gap-[78px] xs:gap-[18px] border-2 rounded-3xl ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  xl:p-[60px] p-[43px] md:ml-12">

        <h1 className="text-[60px] leading-[70px] mt-[-30px] md:font-palanquin text-[#FFFFFF] font-bold">Elevate your <span className="text-[#F3001F]">
           <br />Style </span>
        </h1>

        <p className="text-[#FFFFFF] sm:max-w-sm md:font-light pt-5 text-lg md:mb-6 mb-2">Where fashion meets expression ✨ 
            discover the latest trends at Jules store.
        </p>

        <Button label = "Explore" iconURL={rightSideArrow}></Button>

      </div>

      <div className="relative flex-1 flex md:flex-row justify-center items-center ">
        <img 
        src={image6}
        alt="header picture"
        width={680 }
        height={502}
        className='object-contain relative z-10 md:rounded-r-2xl xl:rounded-r-2xl rounded-b-2xl ' 
        />
      </div>
    </section>
  )
}

export default Hero