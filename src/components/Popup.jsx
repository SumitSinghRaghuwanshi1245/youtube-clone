// PopupCard.js
import React, { useState } from 'react';

const PopupCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="flex p-2 items-centerh-screen">
      <button
        onClick={openPopup}
        className="px-4 py-2 text-white rounded-md rounded-2xl bg-gradient-to-r from-red-700 via-red-950 via-red-900 to-red-700 hover:bg-red-700 "
      >
        Get Premium
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePopup}
        >
          <div
            className="relative p-6 rounded-lg shadow-lg bg-gradient-to-r from-red-900 to-red-700 hover:from-red-600 hover:to-red-950 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute text-white top-3 right-3 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="mb-4 text-2xl font-bold text-white ">Take YouTube Premium @69/- only</h2>
            <p className="mb-4 text-white ">
              Are you sure you want to subscribe to YouTube Premium?
            </p>
            
            <button
              
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:text-gray-700 hover:bg-red-600"
            >
              Subscribe
            </button>
            <button
              onClick={closePopup}
              className="px-4 py-2 ml-6 text-white bg-red-500 rounded-md hover:text-gray-700 hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupCard;
