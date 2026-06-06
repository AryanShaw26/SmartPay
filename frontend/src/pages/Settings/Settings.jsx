import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import ProfileSettings from "../../components/Settings/ProfileSettings/ProfileSettings";
import SecuritySettings from "../../components/Settings/SecuritySettings/SecuritySettings";
import NotificationSettings from "../../components/Settings/NotificationSettings/NotificationSettings";
import AppearanceSettings from "../../components/Settings/AppearanceSettings/AppearanceSettings";

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

          <NotificationSettings />

          <AppearanceSettings />

        </div>

      </div>

    </div>
  );
}

export default Settings;