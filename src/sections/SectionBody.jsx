import {arrowLeft, arrowRight} from "../assets/icons"
import {SectionBodies} from '../constants'
import {SectionBodyCard} from '../components'

const SectionBody = () => {
  return (
    <section className="max-container max-sm:mt-12 space-y-6">
        <div className='flex flex-row justify-between items-center'>
            <div className="text-2xl font-palanquin font-bold">
                Bubu Dresses
            </div>
            <div className="flex cursor-pointer">
            <img
                src={arrowLeft} 
                alt="arrow left"
                className="ml-2 rounded-full w-8 h-8"
            />
            <img
                src={arrowRight} 
                alt="arrow right"
                className="ml-2 rounded-full w-8 h-8"
            />
            </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-14">
          {SectionBodies.map((category, index) => (
              <SectionBodyCard 
              key= {index}
              imgURL= {category.imgURL}
              name= {category.name}
              price={category.price} 
              />
          ))}
        </div>

        <div className='flex flex-row justify-between items-center'>
            <div className="text-2xl font-palanquin font-bold">
            Men’s Two Pieces
            </div>
            <div className="flex cursor-pointer">
            <img
                src={arrowLeft} 
                alt="arrow left"
                className="ml-2 rounded-full w-8 h-8"
            />
            <img
                src={arrowRight} 
                alt="arrow right"
                className="ml-2 rounded-full w-8 h-8"
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

        <div className='flex flex-row justify-between items-center'>
            <div className="text-2xl font-palanquin font-bold">
            Comfortable Classy Wear
            </div>
            <div className="flex cursor-pointer">
            <img
                src={arrowLeft} 
                alt="arrow left"
                className="ml-2 rounded-full w-8 h-8"
            />
            <img
                src={arrowRight} 
                alt="arrow right"
                className="ml-2 rounded-full w-8 h-8"
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

        <div className='flex flex-row justify-between items-center'>
            <div className="text-2xl font-palanquin font-bold">
            Two Pieces
            </div>
            <div className="flex cursor-pointer">
            <img
                src={arrowLeft} 
                alt="arrow left"
                className="ml-2 rounded-full w-8 h-8"
            />
            <img
                src={arrowRight} 
                alt="arrow right"
                className="ml-2 rounded-full w-8 h-8"
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

        <div className='flex flex-row justify-between items-center'>
            <div className="text-2xl font-palanquin font-bold">
            Flowing Gowns
            </div>
            <div className="flex cursor-pointer">
            <img
                src={arrowLeft} 
                alt="arrow left"
                className="ml-2 rounded-full w-8 h-8"
            />
            <img
                src={arrowRight} 
                alt="arrow right"
                className="ml-2 rounded-full w-8 h-8"
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

        <div className='flex flex-row justify-between items-center'>
            <div className="text-2xl font-palanquin font-bold">
            Two Piece of Ladies
            </div>
            <div className="flex cursor-pointer">
            <img
                src={arrowLeft} 
                alt="arrow left"
                className="ml-2 rounded-full w-8 h-8"
            />
            <img
                src={arrowRight} 
                alt="arrow right"
                className="ml-2 rounded-full w-8 h-8"
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