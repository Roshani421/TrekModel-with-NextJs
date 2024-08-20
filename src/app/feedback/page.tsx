"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Textarea from '../components/ui/textarea';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [improvements, setImprovements] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleImprovementsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImprovements(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Rating: ${rating}, Comment: ${comment}, Improvements: ${improvements}`);

    // Show the popup
    setShowPopup(true);

    // Optionally reset the form
    setRating(0);
    setComment('');
    setImprovements('');

    // Hide the popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md relative">
      <h2 className="text-lg font-bold mb-4">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Star
                key={index}
                size={24}
                color={rating >= star ? 'yellow' : 'gray'}
                onClick={() => handleRatingChange(star)}
                className="cursor-pointer mr-2"
              />
            ))}
          </div>
        </div>
        <Textarea
          label="Comment:"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Please leave a comment"
          rows={5}
          className="text-black"
        />
        <Textarea
          label="Further Improvements:"
          value={improvements}
          onChange={handleImprovementsChange}
          placeholder="What can we do better?"
          rows={5}
          className="text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit Feedback
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded shadow-lg border border-gray-300">
          <h3 className="text-lg font-semibold text-center text-white">Thank you for your response!</h3>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;
