import { Nav} from "./components"

import {
  Hero,
  Footer,
  Categories,
  SectionBody
} from "./sections"

const App = () => {
  return(
  <main className="relative md:px-10 flex flex-col p-3">

     <Nav/>

     <section className="">
      <Hero/>
     </section>

     <section className="">
      <Categories/>
     </section>

     <section className="pt-5">
      <SectionBody/>
     </section>

     <section className="bg-pale-blue p-10 mt-[6rem] mb-[-32px] lg:mx-[-40px] mx-[-12px] ">
      <Footer/>
     </section>
  </main>

  );

};

export default App;