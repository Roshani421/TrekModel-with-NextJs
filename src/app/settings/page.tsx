"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { FiMapPin, FiEdit2, FiBell, FiBluetooth, FiRefreshCcw } from 'react-icons/fi';

interface Setting {
  name: string;
  value: boolean;
  description?: string;
  icon: React.ReactNode;
}

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Setting[]>([
    { name: 'Location Services', value: false, description: 'Enable or disable location tracking', icon: <FiMapPin /> },
    { name: 'Dark Theme', value: false, description: 'Toggle between light and dark mode', icon: <Sun /> }, // Default to Sun icon
    { name: 'Information Edit', value: true, description: 'Allow editing of personal information', icon: <FiEdit2 /> },
    { name: 'Notifications', value: true, description: 'Receive updates and alerts', icon: <FiBell /> },
    { name: 'Bluetooth', value: false, description: 'Connect to Bluetooth devices', icon: <FiBluetooth /> },
    { name: 'Background App Refresh', value: false, description: 'Allow apps to refresh in the background', icon: <FiRefreshCcw /> },
  ]);

  const handleToggle = (index: number) => {
    setSettings((prevSettings) => {
      const updatedSettings = prevSettings.map((setting, i) =>
        i === index ? { ...setting, value: !setting.value } : setting
      );

      // Apply the theme if the Dark Theme setting is toggled
      const darkThemeSetting = updatedSettings.find(setting => setting.name === 'Dark Theme');
      if (darkThemeSetting) {
        document.body.classList.toggle('dark', darkThemeSetting.value);
        // Optionally persist the dark theme setting
        localStorage.setItem('darkTheme', JSON.stringify(darkThemeSetting.value));
      }

      return updatedSettings;
    });
  };

  // Load dark theme preference from localStorage on initial render
  useEffect(() => {
    const savedDarkTheme = localStorage.getItem('darkTheme');
    if (savedDarkTheme) {
      const darkTheme = JSON.parse(savedDarkTheme);
      document.body.classList.toggle('dark', darkTheme);
      setSettings((prevSettings) =>
        prevSettings.map((setting) =>
          setting.name === 'Dark Theme' ? { ...setting, value: darkTheme } : setting
        )
      );
    }
  }, []);

  return (
    <div className="flex flex-col max-w-md mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h2 className="text-lg font-bold">Settings</h2>
        <Link href="/">
          <ChevronLeft size={24} className="text-white" />
        </Link>
      </div>
      <div className="p-4">
        {settings.map((setting, index) => (
          <div
            key={setting.name}
            className="flex items-center justify-between p-3 mb-2 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900 transition-colors"
          >
            <div className="flex items-center gap-3">
              {setting.icon}
              <div>
                <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">{setting.name}</h3>
                {setting.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">{setting.description}</p>
                )}
              </div>
            </div>
            {setting.name === 'Dark Theme' ? (
              <button
                className={`${
                  setting.value ? 'bg-blue-500' : 'bg-gray-300'
                } w-10 h-6 rounded-full flex items-center justify-center transition-colors`}
                onClick={() => handleToggle(index)}
              >
                <div
                  className={`${
                    setting.value ? 'translate-x-4 bg-blue-500' : 'translate-x-0 bg-gray-300'
                  } w-4 h-4 rounded-full transition-transform`}
                />
                {setting.value ? <Moon className="text-white" size={16} /> : <Sun className="text-black" size={16} />}
              </button>
            ) : (
              <button
                className={`${
                  setting.value ? 'bg-blue-500' : 'bg-gray-300'
                } w-10 h-6 rounded-full flex items-center justify-center transition-colors`}
                onClick={() => handleToggle(index)}
              >
                <div
                  className={`${
                    setting.value ? 'translate-x-4 bg-blue-500' : 'translate-x-0 bg-gray-300'
                  } w-4 h-4 rounded-full transition-transform`}
                />
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;