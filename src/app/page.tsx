
import React from 'react';
import { FaApple, FaAndroid, FaMapMarkerAlt } from 'react-icons/fa';
import SideNavbar from '../app/components/SideNavBar';


const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar />
      <div className="p-4 lg:ml-60 flex-grow">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <div className="relative">
            <h1 className="text-4xl font-extrabold mb-4">Explore the Beauty of Pokhara</h1>
            <p className="text-lg mb-6">Discover breathtaking landscapes, adventure activities, and more!</p>
            <a
              href="/discover"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg text-lg font-semibold"
            >
              Discover Now
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">Top Destinations</h2>
              <p className="text-gray-600">Explore the most popular spots in Pokhara.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaApple className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">Outdoor Activities</h2>
              <p className="text-gray-600">Experience thrilling outdoor adventures.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaAndroid className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">Local Cuisine</h2>
              <p className="text-gray-600">Taste the flavors of traditional Pokhara dishes.</p>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-4">Learn more about how to plan your trip to Pokhara and what to expect.</p>
          <a
            href="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
