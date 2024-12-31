import React from "react";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideDrawer } from "../../ReduxStore/DrawerSlice";
import { IoCloseSharp } from "react-icons/io5";
import { IconButton } from "@mui/material";

const AppDrawer = () => {

  const open = useSelector((state: any) => state.Open.open);
  const dispatch = useDispatch();

  const DrawerHeader = () => {
    return(
      <div className="flex flex-row justify-between">
        <div></div>
          <div>
              <IconButton
              disableRipple={true}
              onClick={() => dispatch(hideDrawer())}>
                <IoCloseSharp />
              </IconButton>
          </div>
      </div>
    )
  }

  return (
    <Drawer
        title={<DrawerHeader />}
        placement={"left"}
        closable={false}
        open={open}
        key={"left"}
        style={{background:"#000"}}
      >
        <div>
          <ul className="p-0 m-0 list-none">
            <li className="list-item py-3 text-lg text-center cursor-pointer font-clashLight">
              {"About"}
            </li>
            <li className="list-item py-3 text-lg text-center cursor-pointer font-clashLight">
              {"Services"}
            </li>
            <li className="list-item py-3 text-lg text-center cursor-pointer font-clashLight">
             {"Work"}
            </li>
            <li className="list-item py-3 text-lg text-center cursor-pointer font-clashLight">
              {"Blog"}
            </li>
          </ul>
        </div>
      </Drawer>
  )
}

export default AppDrawer;