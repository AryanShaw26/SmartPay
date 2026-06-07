import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import SupportCards from "../../components/Support/SupportCards/SupportCards";
import ContactSupport from "../../components/Support/ContactSupport/ContactSupport";
import FAQSection from "../../components/Support/FAQSection/FAQSection";

import "./Support.css";
import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="support-layout">

      <Sidebar />

      <div className="support-main">

        <Header />

        <div className="support-content">

          <SupportCards />

          <ContactSupport />

          <FAQSection />

        </div>

      </div>

    </div>
  );
}

export default Support;