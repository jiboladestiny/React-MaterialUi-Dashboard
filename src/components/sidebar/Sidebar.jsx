import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import ToggleContext from "../../context/toggle-context";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const toggleCtx = useContext(ToggleContext).value;

  return (
    <div className={toggleCtx ? "sidebar active" : "sidebar"}>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo-cont">
            <span className="icon-cont">
              <AdminPanelSettingsIcon className="icon" />
            </span>{" "}
            <span className="text">Admin</span>
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <div>
              <DashboardIcon className="icon" />
            </div>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <div>
                <PersonOutlineIcon className="icon" />
              </div>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <div>
                <StoreIcon className="icon" />
              </div>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <div>
              <CreditCardIcon className="icon" />
            </div>
            <span>Orders</span>
          </li>
          <li>
            <div>
              <LocalShippingIcon className="icon" />
            </div>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <div>
              <InsertChartIcon className="icon" />
            </div>
            <span>Stats</span>
          </li>
          <li>
            <div>
              <NotificationsNoneIcon className="icon" />
            </div>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <div>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
            </div>
            <span>System Health</span>
          </li>
          <li>
            <div>
              <PsychologyOutlinedIcon className="icon" />
            </div>
            <span>Logs</span>
          </li>
          <li>
            <div>
              <SettingsApplicationsIcon className="icon" />
            </div>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <div>
              <AccountCircleOutlinedIcon className="icon" />
            </div>
            <span>Profile</span>
          </li>
          <li>
            <div>
              <ExitToAppIcon className="icon" />
            </div>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={toggleCtx ? "bottom d-grid" : "bottom d-flex"}>
        <div
          className="colorOption btn"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption btn"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
