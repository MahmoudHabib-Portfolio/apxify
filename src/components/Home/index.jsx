import About from "../About";
import Contact from "../ContactUs";
import OurVision from "../ourVision";
import Process from "../Process";
import Services from "../Services";
import Testimonials from "../Testimonials";

const Home = ({ getNav }) => {
  return (
    <div>
      <About getNav={getNav} />
      <OurVision />
      <Services />
      <Testimonials />
      <Process />
      <Contact />
    </div>
  )
}

export default Home;