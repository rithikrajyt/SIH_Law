// src/Chatbot.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { AiOutlineRobot, AiOutlineUser } from 'react-icons/ai';

const Chatbot = () => {
  const questions = [
    'What is your name?',
    'How old are you?',
    'What is your favorite color?',
    'What do you do for a living?',
    'Where are you from?',
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleInputChange = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const handleSend = () => {
    if (currentAnswer.trim() === '') {
      alert('Please provide an answer.');
      return;
    }

    const newAnswers = [...answers, { question: questions[currentQuestionIndex], answer: currentAnswer }];
    setAnswers(newAnswers);
    setCurrentAnswer('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

  };
  const handlePrint= () => {
    console.log("Document Print API Call , Toaster then Navigate");
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className='bg-gray-100  h-screen'>
      <Navbar/>
      <div className="flex flex-col pt-8 h-5/6 mb-0 bg-gray-100 px-4">
        <div className="flex-grow overflow-y-auto border p-4  bg-white rounded-lg" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011_1280.jpg")', opacity: 0.7, cover: 'full' }}>
          {answers.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex text-left font-semibold text-black">
                <AiOutlineRobot size={50}/> {item.question}
              </div>
              <div className="text-right font-semibold text-brown-900">
                <strong>You:</strong> {item.answer}
              </div>
            </div>
          ))}
          {currentQuestionIndex < questions.length - 1 && (
            <div className="flex text-left font-semibold text-black">
              <AiOutlineRobot size={50}/> {questions[currentQuestionIndex]}
            </div>
          )}
        </div>

        {currentQuestionIndex < questions.length - 1 ? (
          <div className="flex mt-4">
            <input
              type="text"
              value={currentAnswer}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="flex-grow p-2 border border-gray-300 rounded"
              placeholder="Your answer..."
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handlePrint}>
              Print Document
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
