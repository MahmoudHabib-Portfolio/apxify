import { motion } from "framer-motion";
import { ThirdLineRow } from "../../assets/icons";
import { LuArrowUpRight } from "react-icons/lu";
import { DataAnalytics, SeoIcon, WebDesign, WebDevelopment } from "../../assets";

const Services = () => {
  return (
    <div className="flex flex-col gap-y-3 bg-black px-20 w-full lg:py-2 lg:px-2">
        <div className="font-clashBold text-5xl tracking-wide text-center w-full overflow-hidden sm:text-3xl">
            <motion.div
            initial={{y: "100%", opacity: 0}}
            whileInView={{opacity: 1, y: "0%"}}
            viewport={{once: true, margin: "-100px"}}>
              We Provide <br />The Best Services
              </motion.div>
            <div className="flex flex-row justify-center text-center w-full">
            <motion.div 
            className="py-1"
            >
                <ThirdLineRow />
            </motion.div>
            </div>
        </div>
        <div className="flex flex-col gap-y-10 py-10 px-10 w-full">
            <motion.div className="flex flex-row justify-between gap-x-6 w-full md:flex-col gap-y-3"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, margin: "-100px"}}
            transition={{ duration: 1, delay: 0.7 }}>
                <div className="flex flex-row gap-x-4 p-6 bg-boxingbg hover:border-2 border-submit-bg transition-all duration-75 ease-in w-1/2 md:w-full">
                    <div className="w-1/2">
                        {/* img */}
                        <img src={SeoIcon} width={"46"} height={"41"} alt="SEO" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {/* box_content */}
                        <div className="font-clashXtraLight text-2xl">SEO Booster</div>
                        <div className="font-clashLight text-xl">
                        Elevate your online presence with Apexify's SEO Booster – tailored strategies for top search engine rankings. Dominate the digital realm and drive organic traffic to your website with our expert optimization techniques.
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <div className="hover:underline cursor-pointer">Read More</div>
                            <div>
                            <LuArrowUpRight className="text-gray-900 text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* block2 */}
                <div className="flex flex-row gap-x-4 p-6 bg-boxingbg hover:border-2 border-submit-bg transition-all duration-75 ease-in w-1/2 md:w-full">
                    <div className="w-1/2">
                        {/* img */}
                        <img src={WebDevelopment} width={"49"} height={"41"} alt="SEO" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {/* box_content */}
                        <div className="font-clashXtraLight text-2xl">Web Development</div>
                        <div className="font-clashLight text-xl">
                        We craft dynamic and user-centric websites that captivate audiences and drive results. Our web development services blend creativity and functionality to elevate your online presence and exceed your digital goals.
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <div className="hover:underline cursor-pointer">Read More</div>
                            <div>
                            <LuArrowUpRight className="text-gray-900 text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex flex-row justify-between gap-x-6 w-full md:flex-col gap-y-3"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, margin: "-100px"}}
            transition={{ duration: 1, delay: 0.7 }}>
                {/* block3 */}
                <div className="flex flex-row gap-x-4 p-6 bg-boxingbg hover:border-2 border-submit-bg transition-all duration-75 ease-in w-1/2 md:w-full">
                    <div className="w-1/2">
                        {/* img */}
                        <img src={WebDesign} width={"52"} height={"46"} alt="SEO" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {/* box_content */}
                        <div className="font-clashXtraLight text-2xl">Web Design</div>
                        <div className="font-clashLight text-xl">
                        At Apexify, we create captivating web experiences that merge creativity with functionality. Our designs are tailored to elevate your brand's online presence and captivate your audience. Making one’s product stand out.
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <div className="hover:underline cursor-pointer">Read More</div>
                            <div>
                            <LuArrowUpRight className="text-gray-900 text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* block4 */}
                <div className="flex flex-row gap-x-4 p-6 bg-boxingbg hover:border-2 border-submit-bg transition-all duration-75 ease-in w-1/2 md:w-full">
                    <div className="w-1/2">
                        {/* img */}
                        <img src={DataAnalytics} width={"52"} height={"35"} alt="SEO" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {/* box_content */}
                        <div className="font-clashXtraLight text-2xl">Data Analytics</div>
                        <div className="font-clashLight text-xl">
                        We harness the power of data analytics to uncover valuable insights and drive informed decisions. Our advanced analytics solutions empower businesses to optimize performance, enhance efficiency, and unlock new opportunities for growth.
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <div className="hover:underline cursor-pointer">Read More</div>
                            <div>
                            <LuArrowUpRight className="text-gray-900 text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Services;