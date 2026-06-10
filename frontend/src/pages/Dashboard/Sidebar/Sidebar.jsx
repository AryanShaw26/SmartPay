import logo from "../../../assets/logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate=useNavigate();
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <img src={logo} alt="smartpay-logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-menu">
          <Link to="/dashboard" className="sidebar-item active">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link to="/add-money" className="sidebar-item">
            <FaPlusCircle></FaPlusCircle>
            <span>Add Money</span>
          </Link>
          <Link to="/send-money" className="sidebar-item">
            <FaPaperPlane></FaPaperPlane>
            <span>Send Money</span>
          </Link>
          <Link to="/transactions-page" className="sidebar-item">
            <FaHistory></FaHistory>
            <span>Transaction</span>
          </Link>
          <Link to="/beneficiaries" className="sidebar-item">
            <FaUsers></FaUsers>
            <span>Beneficiaries</span>
          </Link>
          <Link to="/qr-payments" className="sidebar-item">
            <FaQrcode></FaQrcode>
            <span>QR Payments</span>
          </Link>
          <Link to="/analytics" className="sidebar-item">
            <FaChartPie></FaChartPie>
            <span>Analytics</span>
          </Link>
          <Link to="/support" className="sidebar-item">
            <FaHeadset></FaHeadset>
            <span>Support</span>
          </Link>
          <Link to="/settings" className="sidebar-item">
            <FaCog></FaCog>
            <span>Settings</span>
          </Link>
        </div>
        <div className="sidebar-logout" onClick={() => navigate("/login")}>
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
