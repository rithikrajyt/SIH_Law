import React, { useEffect, useState } from 'react';
import LawyerCard from '../components/LawyerCard';
import BookingModal from '../components/BookingModal';

const BookingPage = () => {
  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from API (example URL)
    fetch('/api/lawyers') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setLawyers(data))
      .catch((error) => {
        console.error('Error fetching lawyers:', error);
      });
  }, []);

  const handleBookNow = (lawyer) => {
    setSelectedLawyer(lawyer);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedLawyer(null);
  };

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking confirmed for:', selectedLawyer);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Book a Lawyer</h1>
      <div className="flex flex-wrap justify-center">
        {lawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} onBookNow={handleBookNow} />
        ))}
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onBook={handleBooking}
        lawyer={selectedLawyer}
      />
    </div>
  );
};

export default BookingPage;
