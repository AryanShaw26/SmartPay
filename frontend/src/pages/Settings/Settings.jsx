import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import ProfileSettings from "../../components/Settings/ProfileSettings/ProfileSettings";
import SecuritySettings from "../../components/Settings/SecuritySettings/SecuritySettings";

import "./Settings.css";

function Settings() {
  return (
    <div className="settings-layout">

      <Sidebar />

      <div className="settings-main">

        <Header />

        <div className="settings-content">

          <ProfileSettings />

          <SecuritySettings />

        </div>

      </div>

    </div>
  );
}

export default Settings;