/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface TrekkingProfile {
  name: string;
  location: string;
  distance: number;
  duration: number;
  elevationGain: number;
  profilePicture: string;
}

const defaultProfile: TrekkingProfile = {
  name: 'Mount Everest Base Camp',
  location: 'Nepal',
  distance: 65,
  duration: 7,
  elevationGain: 5364,
  profilePicture: 'https://via.placeholder.com/150',
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log(profile);
    setEditMode(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      setProfile({ ...profile, profilePicture: file });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 bg-white rounded shadow-md">
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-20 h-20 mb-4">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
          {editMode && (
            <label className="absolute bottom-0 right-0 p-1 cursor-pointer bg-blue-500 text-white rounded-full">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Camera color="white" size={20} />
            </label>
          )}
        </div>
        <h2 className="text-xl font-bold text-black">{profile.name}</h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Trekking Profile</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      <form onSubmit={handleSave} className="space-y-3">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            id="name"
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Enter trek name"
            title="Name of the trekking profile"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="location">
            Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            id="location"
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Enter location"
            title="Location of the trek"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="distance">
            Distance (km):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            id="distance"
            type="number"
            name="distance"
            value={profile.distance}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Enter distance in km"
            title="Distance of the trek in kilometers"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="duration">
            Duration (days):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            id="duration"
            type="number"
            name="duration"
            value={profile.duration}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Enter duration in days"
            title="Duration of the trek in days"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="elevationGain">
            Elevation Gain (m):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            id="elevationGain"
            type="number"
            name="elevationGain"
            value={profile.elevationGain}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Enter elevation gain in meters"
            title="Elevation gain of the trek in meters"
          />
        </div>
        {editMode && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
            type="submit"
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
