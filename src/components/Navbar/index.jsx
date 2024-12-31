import { Button, IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { showDrawer } from "../../ReduxStore/DrawerSlice";
import { useDispatch } from "react-redux";
import {Logo} from "../../assets";

const NavBar = ({getNav}) => {

  const dispatch = useDispatch();

  return (
    <nav className="flex flex-row justify-between px-16 py-8 lg:px-6" style={{zIndex:"1000"}} ref={getNav}>
        {/* Logo */}
        <div>
          <img src={Logo} width={"204"} height={"41"} alt="Apexify" />
        </div>
        {/* NavMenu */}
        <div className="py-2 text-center md:hidden">
            <ul className="p-0 m-0 list-none">
              <li className="text-white inline-block text-xl cursor-pointer tracking-[0.1em] pr-12 lg:pr-6">About</li>
              <li className="text-white inline-block text-xl cursor-pointer tracking-[0.1em] pr-12 lg:pr-6">Services</li>
              <li className="text-white inline-block text-xl cursor-pointer tracking-[0.1em] pr-12 lg:pr-6">Work</li>
              <li className="text-white inline-block text-xl cursor-pointer tracking-[0.1em] pr-12 lg:pr-6">Blog</li>
            </ul>
        </div>
        {/* Contact */}
        <div className="flex flex-row gap-x-3">
          <div>
          <Button
          sx={{
            background:"#6CC800",
            textTransform:"capitalize",
            color:"#000",
            letterSpacing:"1px",
            fontWeight: "600",
            padding: "0.5em 1.6em",
            fontSize: "14px",
            borderRadius: "0px",
            "&:hover":{
              background:"#6CC800"
            }
          }}>
            Contact Us
          </Button>
          </div>
          <div className="text-white cursor-pointer hidden md:block">
            <IconButton
            disableRipple={true}
            onClick={() => dispatch(showDrawer())}
            aria-label="Navbar"
            >
              <FaBars className="text-2xl"/>
        </IconButton>
          </div>
        </div>
    </nav>
  )
}

export default NavBar;