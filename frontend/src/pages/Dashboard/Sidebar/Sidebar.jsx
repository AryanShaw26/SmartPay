import logo from "../../../assets/logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  FaPlusCircle,
  FaPaperPlane,
  FaHistory,
  FaUsers,
  FaQrcode,
  FaChartPie,
  FaHeadset,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <img src={logo} alt="smartpay-logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-menu">
          <Link to="/" className="sidebar-item active">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link to="/add-money" className="sidebar-item">
            <FaPlusCircle></FaPlusCircle>
            <span>Add Money</span>
          </Link>
          <div className="sidebar-item">
            <FaPaperPlane></FaPaperPlane>
            <span>Send Money</span>
          </div>
          <div className="sidebar-item">
            <FaHistory></FaHistory>
            <span>Transaction</span>
          </div>
          <div className="sidebar-item">
            <FaUsers></FaUsers>
            <span>Beneficiaries</span>
          </div>
          <div className="sidebar-item">
            <FaQrcode></FaQrcode>
            <span>QR Payments</span>
          </div>
          <div className="sidebar-item">
            <FaChartPie></FaChartPie>
            <span>Analytics</span>
          </div>
          <div className="sidebar-item">
            <FaHeadset></FaHeadset>
            <span>Support</span>
          </div>
          <div className="sidebar-item">
            <FaCog></FaCog>
            <span>Settings</span>
          </div>
        </div>
        <div className="sidebar-logout">
          <FaSignOutAlt></FaSignOutAlt>
          <span>Logout</span>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
