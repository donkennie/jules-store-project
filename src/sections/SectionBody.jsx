import {arrowLeft, arrowRight} from "../assets/icons"
import {SectionBodies} from '../constants'
import {SectionBodyCard} from '../components'

const SectionBody = () => {
  return (
    <section className="max-container max-sm:mt-12">
        <div className='flex flex-row justify-between items-center'>
            <div className="text-2xl font-palanquin font-bold">
                Bubu Dresses
            </div>
            <div className="flex ">
            <img
                src={arrowLeft} 
                alt="arrow left"
                width={800}
                height={800}
                className="ml-2 rounded-full w-5 h-5"
            />
            <img
                src={arrowRight} 
                alt="arrow right"
                width={800}
                height={800}
                className="ml-2 rounded-full w-5 h-5"
            />
            </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-14 ">
          {SectionBodies.map((category, index) => (
              <SectionBodyCard 
              key= {index}
              imgURL= {category.imgURL}
              name= {category.name}
              price={category.price} 
              />
          ))}
        </div>

    </section>

   
  )
}

export default SectionBody