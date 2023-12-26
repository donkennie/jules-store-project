import Button from "../components/Button";
import {rightArrow} from "../assets/icons";
import {image6} from "../assets/images";

const Hero = () => {
  return (
    <section className="max-container w-full flex xl-flex-row flex-row bg-black min-h-[25rem] gap-10 border-2 border-red-500 rounded-2xl">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x p-[60px] ml-6">

        <h1 className="text-[60px] leading-[70px] mt-[-30px] font-palanquin text-[#FFFFFF] font-bold">Elevate your <span className="text-[#F3001F]">
           <br />Style </span>
        </h1>

        <p className="text-[#FFFFFF] sm:max-w-sm font-light pt-5 text-lg mb-6">Where fashion meets expression ✨ 
            discover the latest trends at Jules store.
        </p>

        <Button label = "Explore" iconURL={rightArrow}></Button>

      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen">
        <img 
        src={image6}
        alt="header picture"
        width={667}
        height={502}
        className='object-contain relative z-10 ' 
        />
      </div>
    </section>
  )
}

export default Hero