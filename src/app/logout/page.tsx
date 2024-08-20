"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Update this import
import { LogOut } from 'lucide-react';

const LogoutPage = () => {
  const [logoutMessage, setLogoutMessage] = useState('');
  const [logoutButtonDisabled, setLogoutButtonDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoutMessage('You have been logged out successfully!');
      setLogoutButtonDisabled(true);
      router.push('/login'); // Redirect to login page
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  const handleLogout = () => {
    setLogoutMessage('Logging out...');
    setLogoutButtonDisabled(true);

    // Clear authentication tokens or user data
    localStorage.removeItem('authToken'); // Example
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Trekking Logout</h2>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
            disabled={logoutButtonDisabled}
          >
            Logout
          </button>
        </div>
        <div className="text-center">
          {logoutMessage && <p className="text-gray-700 text-lg font-bold">{logoutMessage}</p>}
          <LogOut color="red" size={64} className="mt-4" />
          <p className="text-gray-500 text-sm mt-4">Redirecting to login page...</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
