import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import CloseFullscreenOutlinedIcon from "@mui/icons-material/CloseFullscreenOutlined";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import { useContext, useState } from "react";
import ToggleContext from "../../context/toggle-context";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const toggleCtx = useContext(ToggleContext);
  const [togglenav, setToggleNav] = useState(false);

  const toggle = () => {
    toggleCtx.toggleValue();
  };

  const toggleNavEvent = () => {
    setToggleNav(!togglenav);
  };

  return (
    <div className="navbars">
      <span className="toggle" onClick={toggle}>
        {!toggleCtx.value && <CloseFullscreenOutlinedIcon />}
        {toggleCtx.value && <DoubleArrowOutlinedIcon />}
      </span>

      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon />
      </div>

      <div className="wrapper-cont">
        <div className={togglenav ? "wrapper responsive" : "wrapper"}>
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="counter">2</div>
            </div>
          </div>
        </div>
        
        <div className="last">
          <div className="item" onClick={toggleNavEvent}>
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item ms-2">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
