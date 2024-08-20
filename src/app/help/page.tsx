"use client";

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [showFaq, setShowFaq] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Trekker Help Page</h1>
      <p className="text-lg mb-4">Get help and support for your trekking journey</p>

      <div className="flex flex-wrap justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => setShowFaq(!showFaq)}
        >
          FAQ
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowContact(!showContact)}
        >
          Contact Us
        </button>
      </div>

      {showFaq && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          <ul>
            <li className="mb-2">
              <p className="font-bold">Q: What should I pack for my trek?</p>
              <p>Check our packing list for the essentials.</p>
            </li>
            <li className="mb-2">
              <p className="font-bold">Q: How do I navigate the trails?</p>
              <p>Use our map and compass guide to stay on track.</p>
            </li>
            <li className="mb-2">
              <p className="font-bold">Q: What if I get lost or injured?</p>
              <p>Stay calm and follow our emergency procedures.</p>
            </li>
          </ul>
        </div>
      )}

      {showContact && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="flex items-center">
            <MapPin size={24} color="blue" className="mr-2" /> Address: 123 Trekker Trail, Trekville, Nepal
          </p>
          <p>Phone: 13234-4545-34343</p>
          <p>
            Email: <a href="mailto:info@trekkerhelp.com" className="text-blue-500 hover:underline">info@trekkerhelp.com</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default HelpPage;