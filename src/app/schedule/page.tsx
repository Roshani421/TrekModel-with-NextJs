"use client";

import React, { useState } from 'react';
import { format } from 'date-fns';

interface ScheduleTimeProps {}

const ScheduleTime: React.FC<ScheduleTimeProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Schedule Time for Booking</h2>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Choose Date
          </label>
          <input
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}
            onChange={handleDateChange}
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Choose Time
          </label>
          <input
            type="time"
            id="time"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Book Now
      </button>
    </div>
  );
};

export default ScheduleTime;
