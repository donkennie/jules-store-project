import {CategoryDresses} from '../constants';
import {CategoriesCard} from '../components'
const Categories = () => {
  return (
    
    <section className="max-container max-sm:mt-12">
        <div className="mt-8 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-14 ">
          {CategoryDresses.map((category) => (
              <CategoriesCard key= {category.name} {...category}/>
          ))}
        </div>
    </section>
  );
};

export default Categories