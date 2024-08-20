import React, { useState } from 'react';
import { Bell } from 'lucide-react';

interface Notification {
  id: number;
  message: string;
}

const NavbarNotification: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'New message from John Doe' },
    { id: 2, message: 'New message from Jane Doe' },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const handleNotificationClick = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell size={22} className="text-black" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-10 right--2 bg-white shadow-md p-3 w-64">
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id} className="py-1 border-b border-gray-200">
                <span className="block text-sm">{notification.message}</span>
                <button
                  className="text-xs text-gray-500 hover:text-gray-700 mt-1 ml-[-10px]" // Shift button to the left
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  Mark as read
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarNotification;
