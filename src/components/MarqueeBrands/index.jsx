import Marquee from "react-fast-marquee";
import { amazon, credClub, flipkartSeeklogo, paypalSeeklogo, Vector } from "../../assets";

const MarqueeBrands = () => {

    const brands = [
        {id: 0, img: credClub, imgAlt: "bannerOne"},
        {id: 1, img: paypalSeeklogo, imgAlt: "bannerTwo"},
        {id: 2, img: amazon, imgAlt: "bannerThree"},
        {id: 3, img: Vector, imgAlt: "bannerFour"},
        {id: 4, img: flipkartSeeklogo, imgAlt: "bannerFive"}
    ];

  return (
    <Marquee autoFill={true}>
    <div className="flex flex-row overflow-hidden w-full">
        {brands?.map((x) => (
            <div key={x.id} className="px-4">
                <img src={x.img} width={"125"} height={"42"} alt={x.imgAlt} />
            </div>
        ))}
    </div>
    </Marquee>
  )
}

export default MarqueeBrands;