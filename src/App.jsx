import { BrowserRouter } from "react-router-dom";

import { Contact, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-contain bg-center'>
          <Navbar />
          <Hero />
        <div className='relative z-0'>
        <Works id="/actividades"/>
        <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;