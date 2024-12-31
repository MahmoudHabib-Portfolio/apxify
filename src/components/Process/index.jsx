import { motion } from "framer-motion";
import { ThirdLineRow } from "../../assets/icons";
import { PathFinder, PathOne, pathThree, pathTwo } from "../../assets";

const Process = () => {
  return (
    <div className="flex flex-col gap-y-6 bg-black py-16 px-20 w-full lg:px-8">
        <div className="font-clashBold text-5xl tracking-wide text-center w-full overflow-hidden sm:text-3xl">
            <motion.div
            initial={{y: "100%", opacity: 0}}
            whileInView={{opacity: 1, y: "0%"}}
            viewport={{once: true, margin: "-100px"}}>
              Simple Working Process
              </motion.div>
            <div className="flex flex-row justify-center text-center w-full">
            <motion.div 
            className="py-1"
            >
                <ThirdLineRow />
            </motion.div>
            </div>
        </div>
        <div className="flex flex-col gap-y-3 w-full">
            <motion.div 
            className="pt-8 w-full"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{opacity: 1, y:"0%"}}
            viewport={{once: true, margin:"-100px"}}
            transition={{ duration: 1 }}>
                <img src={PathFinder} width={"1159"} height={"115"} alt="pathFinder" />
            </motion.div>
            {/* process steps */}
            <div className="flex flex-row justify-between py-6 px-6 w-full md:px-3 sm:flex-col gap-y-10">
                {/* path01 */}
                <motion.div 
                className="flex flex-col gap-y-6"
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{opacity: 1, y:"0%"}}
                viewport={{once: true, margin:"-50px"}}
                transition={{ duration: 1, delay: 0.8 }}>
                    <div className="flex justify-center">
                        <img src={PathOne} width={"99"} height={"72"} alt="pathOne" />
                    </div>
                    <div className="flex justify-center font-clashLight text-2xl text-center md:text-xl">
                    Fill Out The Form
                    </div>
                </motion.div>
                {/* path02 */}
                <motion.div
                className="flex flex-col gap-y-6 text-center"
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{opacity: 1, y:"0%"}}
                viewport={{once: true, margin:"-50px"}}
                transition={{ duration: 1, delay: 0.6 }}>
                    <div className="flex justify-center">
                        <img src={pathTwo} width={"132"} height={"72"} alt="pathOne" />
                    </div>
                    <div className="font-clashLight text-2xl text-center md:text-xl">
                    Meet With A Specialist
                    </div>
                </motion.div>
                {/* path03 */}
                <motion.div className="flex flex-col gap-y-6 text-center"
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{opacity: 1, y:"0%"}}
                viewport={{once: true, margin:"-50px"}}
                transition={{ duration: 1, delay: 0.4 }}>
                    <div className="flex justify-center">
                        <img src={pathThree} width={"135"} height={"72"} alt="pathOne" />
                    </div>
                    <div className="font-clashLight text-2xl text-center md:text-xl">
                    Start Project
                    </div>
                </motion.div>
            </div>
        </div>
        </div>
  )
}

export default Process;