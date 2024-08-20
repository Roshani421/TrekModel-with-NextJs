/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Trek {
  id: number;
  name: string;
  location: string;
  difficulty: string;
  duration: string;
  description: string;
}

const treks: Trek[] = [
  {
    id: 1,
    name: 'Everest Base Camp Trek',
    location: 'Sagarmatha Zone',
    difficulty: 'Challenging',
    duration: '12-14 days',
    description: 'Trek to the foot of the highest mountain in the world',
  },
  {
    id: 2,
    name: 'Annapurna Circuit Trek',
    location: 'Annapurna Zone',
    difficulty: 'Moderate',
    duration: '14-16 days',
    description: 'Trek through the world\'s deepest gorge and highest pass',
  },
  {
    id: 3,
    name: 'Langtang Valley Trek',
    location: 'Langtang Zone',
    difficulty: 'Easy',
    duration: '7-10 days',
    description: 'Trek through lush forests and traditional villages',
  },
];

const RecommendationPage = () => {
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);

  const handleTrekSelect = (trek: Trek) => {
    setSelectedTrek(trek);
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-200 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Recommended Treks in Nepal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treks.map((trek) => (
            <div
              key={trek.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
                trek.id === 1 ? 'lg:ml-8' : ''
              }`}
            >
              <img src={`https://via.placeholder.com/600x400?text=${trek.name}`} alt={trek.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{trek.name}</h2>
                <p className="text-gray-600 mb-2">
                  <MapPin size={20} color="gray" className="inline-block mr-2" /> {trek.location}
                </p>
                <p className="text-gray-600 mb-2">Difficulty: <span className="font-semibold">{trek.difficulty}</span></p>
                <p className="text-gray-600 mb-2">Duration: <span className="font-semibold">{trek.duration}</span></p>
                <p className="text-gray-600 mb-4">{trek.description}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                  onClick={() => handleTrekSelect(trek)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedTrek && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedTrek.name}</h2>
            <p className="text-gray-600 mb-2">
              <MapPin size={20} color="gray" className="inline-block mr-2" /> {selectedTrek.location}
            </p>
            <p className="text-gray-600 mb-2">Difficulty: <span className="font-semibold">{selectedTrek.difficulty}</span></p>
            <p className="text-gray-600 mb-2">Duration: <span className="font-semibold">{selectedTrek.duration}</span></p>
            <p className="text-gray-600 mb-4">{selectedTrek.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationPage;
