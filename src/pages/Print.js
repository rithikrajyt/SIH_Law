import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import hundred from '../components/hundred.png';

const Print = () => {
    const [htmlText, setHtmlText] = useState('');
    const [buttonVisible, setButtonVisible] = useState(true);

    useEffect(() => {
        // Fetch HTML text from API
        axios.get('https://api.example.com/html-text')
            .then(response => {
                setHtmlText(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handlePrint = () => {
        setButtonVisible(false); 
        setTimeout(() => {
            window.print();
        }, 1000);
        window.print();
    };

    return (
        <div className="flex flex-col items-center">
            <img src={hundred} alt="Image" className="mb-4" />

            <div className="w-full max-w-2xl p-4 bg-white">
                <div dangerouslySetInnerHTML={{ __html: htmlText }}></div>
            </div>

            {buttonVisible && (
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePrint}
                >
                    Print Page
                </button>
            )}
        </div>
    );
};

export default Print;
