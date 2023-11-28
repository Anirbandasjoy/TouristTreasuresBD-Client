/* eslint-disable react/prop-types */
// src/components/FAQItem.js

import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const FAQItem = ({ answer, question }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div className="mb-8 border border-blue-400 p-4 rounded-sm">
            <div className='flex items-center gap-3'>
                <FaQuestion />
                <p onClick={toggleAnswerVisibility} className="cursor-pointer text-lg text-gray-400-500">
                    {question}

                </p>
            </div>

            {isAnswerVisible && (
                <div className="mt-4">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;
