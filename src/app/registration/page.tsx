"use client";

// pages/register.tsx
import React, { useState } from 'react';
import { MapPin, Mail, Phone, User, Info, HeartPulse } from 'lucide-react';
import { toast } from 'react-toastify';

const TrekkingRegistrationPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [trekkingExperience, setTrekkingExperience] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [error] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form validation
    if (!fullName || !email || !phoneNumber || !emergencyContactNumber) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Perform API call or form processing here

    // Show success toast notification
    toast.success('Registration successful!');

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setEmergencyContactNumber('');
    setTrekkingExperience('');
    setMedicalConditions('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Trekking Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center border-b-2 border-gray-300 rounded-md bg-white">
          <User className="w-6 h-6 text-gray-500 mx-2" />
          <input
            className="appearance-none border-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className="flex items-center border-b-2 border-gray-300 rounded-md bg-white">
          <Mail className="w-6 h-6 text-gray-500 mx-2" />
          <input
            className="appearance-none border-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex items-center border-b-2 border-gray-300 rounded-md bg-white">
          <Phone className="w-6 h-6 text-gray-500 mx-2" />
          <input
            className="appearance-none border-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="flex items-center border-b-2 border-gray-300 rounded-md bg-white">
          <Phone className="w-6 h-6 text-gray-500 mx-2" />
          <input
            className="appearance-none border-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="emergencyContactNumber"
            type="tel"
            placeholder="Emergency Contact Number"
            value={emergencyContactNumber}
            onChange={(event) => setEmergencyContactNumber(event.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-start border-b-2 border-gray-300 rounded-md bg-white">
            <Info className="w-6 h-6 text-gray-500 mx-2 mt-2" />
            <textarea
              className="appearance-none border-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="trekkingExperience"
              placeholder="Trekking Experience"
              value={trekkingExperience}
              onChange={(event) => setTrekkingExperience(event.target.value)}
            />
          </div>
          <div className="flex items-start border-b-2 border-gray-300 rounded-md bg-white">
            <HeartPulse className="w-6 h-6 text-gray-500 mx-2 mt-2" />
            <textarea
              className="appearance-none border-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="medicalConditions"
              placeholder="Medical Conditions"
              value={medicalConditions}
              onChange={(event) => setMedicalConditions(event.target.value)}
            />
          </div>
        </div>
        {error && (
          <div className="text-red-600 text-center">{error}</div>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="mt-6 text-gray-700 flex items-center justify-center">
        <MapPin size={24} className="mr-2" />
        Please ensure you have read and understood the trekking guidelines and rules before registering.
      </div>
    </div>
  );
};

export default TrekkingRegistrationPage;