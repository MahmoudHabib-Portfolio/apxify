import { motion } from "framer-motion";
import { FirstLineRow } from "../../assets/icons";
import { ourVision } from "../../assets";

const OurVision = () => {

  return (
    <div className="flex flex-col gap-y-3 bg-black py-16 px-20 w-full lg:px-8">
        <div className="font-clashBold text-5xl tracking-wide text-center w-full overflow-hidden sm:text-3xl">
            <motion.div
            initial={{y: "100%", opacity: 0}}
            whileInView={{opacity: 1, y: "0%"}}
            viewport={{once: true, margin: "-100px"}}>
              Our Vision
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
        viewport={{once: true, margin: "-200px"}}
        transition={{ duration: 1, delay: 0.8}}>
            {/* thumbnail */}
            <div className="text-right w-1/2 md:w-full">
              <img src={ourVision} width={"1030"} height={"674"} alt="empower innovations" />
            </div>
            <div className="flex flex-col gap-y-3 w-1/2 md:w-full">
              <div className="font-clashMedium text-4xl w-1/2 lg:text-3xl md:w-full">Empowering  Innovations</div>
              <div className="text-2xl font-clashLight lg:text-xl">
              Our vision is to revolutionize the digital landscape through innovative solutions. We aspire to be the driving force behind transformative technology, empowering businesses to thrive in the digital era. Our commitment is to lead with creativity and unwavering dedication to our clients' success."
              </div>
            </div>
        </motion.div>
    </div>
  )
}

export default OurVision;