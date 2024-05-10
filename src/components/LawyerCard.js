import React, { useState } from 'react';

const LawyerCard = ({ lawyer, onBookNow }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <div className="flex items-center">
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="w-16 h-16 rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{lawyer.name}</h3>
          <p className="text-gray-600">{lawyer.address}</p>
          <p className="text-gray-600">{lawyer.email}</p>
          <p className="text-gray-600">{lawyer.phone}</p>
          <p className="text-gray-600">{lawyer.price}</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => onBookNow(lawyer)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
