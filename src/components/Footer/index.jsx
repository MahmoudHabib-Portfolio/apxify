import { Button } from "@mui/material";
import { facebook, FooterIcon, Insta, twitter } from "../../assets";

const Footer = () => {

  const submit = (e) => {
    e.preventDefault();
  }

  return (
    <footer className="flex flex-col bg-black gap-y-10 px-16 py-8 w-full lg:px-8">
      <div className="flex flex-row justify-between bg-secondary-Color med:flex-col gap-y-10">
      <div className="flex flex-col gap-y-10 w-3/12 med:w-full">
        <div className="med:w-full text-center">
          <img src={FooterIcon} width={"200"} height={"41"} alt="Apexify" />
        </div>
        <div className="text-white font-clashXtraLight text-lg">
        Our innovative approach ensures seamless integration and unparalleled performance, driving your business forward in the digital age.
        </div>
      </div>
      <div className="flex flex-col gap-y-2 med:w-full text-center">
        <div className="text-xl font-clashLight text-right med:text-center w-full">Quick Menu</div>
        <div>
        <ul className="p-0 m-0 list-none">
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">About</li>
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">Services</li>
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">Work</li>
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">Blog</li>
            </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 med:w-full text-center">
        <div className="text-xl font-clashLight text-right med:text-center w-full">Resources</div>
        <div>
        <ul className="p-0 m-0 list-none">
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">Newsletter</li>
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">Community</li>
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">Jobs</li>
              <li className="text-white list-item text-lg cursor-pointer tracking-[0.1em] py-1 text-right med:text-center">Forums</li>
            </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 med:w-full text-center">
      <div className="med:text-center w-full">
      <div className="text-xl font-clashLight text-left med:text-center">Subscribe to our newletter</div>
      <div className="font-clashLight text-white text-left text-sm py-2 med:text-center">Subscribe now to be updates with the latest features</div>
      </div>
      <div>
       <form onSubmit={submit}>
          <div className="flex flex-row bg-white py-2 px-3 w-full">
              <div className="bg-white med:w-full">
                <input type="text" className="w-full text-black outline-none font-clashXtraLight text-xl py-3" />
              </div>
              <div>
                <Button
                sx={{background:"#B9FF66",
                  textTransform: "capitalize",
                  color: "#000",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  fontWeight: "bold",
                  padding: "0.8em 1.2em",
                  "&:hover": {
                    background:"#B9FF66"
                  }
                }}>
                  Subscribe
                </Button>
              </div>
          </div>
       </form>
      </div>
      </div>
      </div>
      {/* copyright */}
      <div className="flex flex-row justify-between bg-black border-t-2 pt-8 border-white-Color w-full sm:flex-col gap-y-6 text-center">
        <div className="text-white text-xs pt-2 font-clashLight">
        @ 2024 Apexify All Rights Reserved
        </div>
        <div className="text-white">
        <ul className="p-0 m-0 list-none">
              <li className="inline-block cursor-pointer px-1">
                <img src={facebook} width={"33"} height={"33"} alt="facebook" />
              </li>
              <li className="inline-block cursor-pointer px-1">
                <img src={Insta} width={"33"} height={"33"} alt="facebook" />
              </li>
              <li className="inline-block cursor-pointer px-1">
                <img src={twitter} width={"33"} height={"33"} alt="facebook" />
              </li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;