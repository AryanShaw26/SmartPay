import "./AppearanceSettings.css";

function AppearanceSettings() {
  return (
    <div className="appearance-settings">

      <div className="appearance-header">
        <h2>Appearance Settings</h2>
      </div>

      {/* Theme Selection */}

      <div className="setting-section">

        <h3>Theme</h3>

        <div className="theme-options">

          <div className="theme-option">
            <input
              type="radio"
              id="dark-mode"
              name="theme"
              defaultChecked
            />
            <label htmlFor="dark-mode">
              Dark Mode
            </label>
          </div>

          <div className="theme-option">
            <input
              type="radio"
              id="light-mode"
              name="theme"
            />
            <label htmlFor="light-mode">
              Light Mode
            </label>
          </div>

        </div>

      </div>

      {/* Language Selection */}

      <div className="setting-section">

        <h3>Language</h3>

        <select>

          <option>English</option>

          <option>Hindi</option>

          <option>Bengali</option>

        </select>

      </div>

      <button className="save-appearance-btn">
        Save Appearance
      </button>

    </div>
  );
}

export default AppearanceSettings;