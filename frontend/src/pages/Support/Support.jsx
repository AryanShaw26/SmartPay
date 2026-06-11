import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import SupportCards from "../../components/Support/SupportCards/SupportCards";

import "./Support.css";

function Support() {
  return (
    <div className="support-layout">
      <Sidebar />

      <div className="support-main">
        <Header />

        <div className="support-content">
          <SupportCards />
        </div>
      </div>
    </div>
  );
}

export default Support;