import { Button } from "@mui/material";
import MarqueeBrands from "../MarqueeBrands";
import { ScrollToMainNav } from "../../functions/GsapAnimate";
import { useEffect, useRef } from "react";

const About = ({getNav}) => {

    const ScrollT = useRef(null);

    useEffect(() => {
        ScrollToMainNav(ScrollT.current, getNav.current);
    }, []);

  return (
    <>
    <div className="flex flex-col pt-12 px-28 pb-16 text-center lg:px-8 sm:px-4">
        <div className="py-3">
        <h1 className="text-white font-clashBold text-6xl leading-snug tracking-[1px] lg:text-4xl sm:text-2xl">Your Path To A Digital Revolution Starts Here!</h1>
        </div>
        <div className="px-28 py-6 lg:px-8 sm:px-4">
            <h2 className="text-white font-clashSemiBold text-4xl leading-tight tracking-[1px] lg:text-2xl sm:text-lg">We strive to empower businesses with cutting-edge solutions, propelling them to new heights of success.</h2>
        </div>
        <div className="flex flex-row gap-x-8 justify-center pt-10 pb-16 w-full">
            <div className="text-white">
                <Button
                sx={{
                    backgroundColor:"#6CC800",
                    textTransform: "capitalize",
                    color: "#000",
                    borderRadius: "0px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "0.5em 2em",
                    "&:hover":{
                        background: "#6CC800"
                    },
                    "& .MuiTouchRipple-ripple": {
                        backgroundColor: "#6CC800"
                    },
                }}
                aria-label="book-button">
                Schedule A Call
                </Button>
            </div>
            <div className="text-white">
            <Button
                sx={{
                    background:"trasparent",
                    textTransform: "capitalize",
                    color: "#fff",
                    borderRadius: "0px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "0.5em 2em",
                    border: "1.5px solid #6CC800",
                    "&:hover":{
                        background: "transparent"
                    },
                    "& .MuiTouchRipple-ripple": {
                        backgroundColor: "#6CC800"
                    },
                }}
                aria-label="book-button">
                Explore More
                </Button>
            </div>
        </div>
    </div>
    {/* brands marquee */}
    <div className="block text-center bg-black w-full px-24 bg-brandsbg md:px-8" ref={ScrollT}>
    <MarqueeBrands />
    </div>
    </>
  )
}

export default About;