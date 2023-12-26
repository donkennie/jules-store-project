import {CategoryDresses} from '../constants/index';
import {CategoriesCard} from '../components'
const Categories = () => {
  return (
    <section className="max-container max-sm:mt-12">
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {CategoryDresses.map((category) => (
              <CategoriesCard key= {category.name} {...category}/>
          ))}
        </div>
    </section>
  )
}

export default Categories