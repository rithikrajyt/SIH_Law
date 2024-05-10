import React from 'react';

const BookingModal = ({ isOpen, onClose, onBook, lawyer }) => {
  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 shadow-lg z-10">
        <h2 className="text-xl font-bold">Book Appointment with {lawyer.name}</h2>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select Date</label>
          <input
            type="datetime-local"
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 text-black rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={onBook}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
