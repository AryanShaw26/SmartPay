import "./AppearanceSettings.css";
import { useState } from "react";

function AppearanceSettings() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("English");

  const handleSave = () => {
    console.log({
      theme,
      language,
    });
  };

  return (
    <div className="appearance-settings">

      <div className="appearance-header">
        <h2>Appearance Settings</h2>
      </div>

      <div className="setting-section">

        <h3>Theme</h3>

        <div className="theme-options">

          <div className="theme-option">
            <input
              type="radio"
              id="dark-mode"
              name="theme"
              checked={theme === "dark"}
              onChange={() =>
                setTheme("dark")
              }
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
              checked={theme === "light"}
              onChange={() =>
                setTheme("light")
              }
            />
            <label htmlFor="light-mode">
              Light Mode
            </label>
          </div>

        </div>

      </div>

      <div className="setting-section">

        <h3>Language</h3>

        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Bengali</option>
        </select>

      </div>

      <button
        className="save-appearance-btn"
        onClick={handleSave}
      >
        Save Appearance
      </button>

    </div>
  );
}

export default AppearanceSettings;