import { motion } from "framer-motion";
import { FirstLineRow } from "../../assets/icons";
import { Testmonials } from "../../assets";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-y-3 bg-black py-16 px-20 w-full lg:px-8">
        <div className="font-clashBold text-5xl tracking-wide text-center w-full overflow-hidden sm:text-3xl">
            <motion.div
            initial={{y: "100%", opacity: 0}}
            whileInView={{opacity: 1, y: "0%"}}
            viewport={{once: true, margin: "-100px"}}>
              Testimonials
              </motion.div>
            <div className="flex flex-row justify-center text-center w-full">
            <motion.div 
            className="py-1"
            >
                <FirstLineRow />
            </motion.div>
            </div>
        </div>
        <motion.div className="flex flex-row justify-between py-8 px-8 gap-x-10 w-full lg:px-2 md:flex-col gap-y-6"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true, margin: "-200px"}}>
            {/* thumbnail */}
            <div className="flex flex-col gap-y-3 w-1/2 md:w-full">
              <div className="font-clashMedium text-4xl w-3/5 lg:text-3xl md:w-full">Sam Jeffords, TechNova Solutions</div>
              <div className="text-2xl font-clashLight tracking-wider lg:text-xl">
              "Working with Apexify has been a game-changer for our business. Their expertise and dedication have significantly boosted our online presence, leading to tangible results and increased visibility. Their personalized approach and unwavering support make them an invaluable partner on our journey to success. I highly recommend Apexify to anyone seeking exceptional digital solutions."
              </div>
            </div>
            <div className="text-right w-1/2 md:w-full">
              <img src={Testmonials} width={"1030"} height={"674"} alt="empower innovations" />
            </div>
        </motion.div>
    </div>
  )
}

export default Testimonials;