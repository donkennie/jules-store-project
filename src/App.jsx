import { Nav, SectionBody } from "./components"

import {
  Hero,
  Footer,
  Categories
} from "./sections"

const App = () => {
  return(
  <main className="relative">

     <Nav/>

     <section className="">
      <Hero/>
     </section>

     <section className="">
      <Categories/>
     </section>

     <section className="">
      <SectionBody/>
     </section>

     <section className="bg-pale-blue">
      <Footer/>
     </section>
  </main>

  );

};

export default App;