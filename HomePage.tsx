import React, { useState } from 'react';
import Button from './Button';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState('');

  const handlePrimaryClick = () => {
    setMessage('Primary button clicked!');
  };

  const handleSecondaryClick = () => {
    setMessage('Secondary button clicked!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Button Demo</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Primary Variant</h2>
            <Button variant="primary" onClick={handlePrimaryClick}>
              Click Me (Primary)
            </Button>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Secondary Variant</h2>
            <Button variant="secondary" onClick={handleSecondaryClick}>
              Click Me (Secondary)
            </Button>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Disabled State</h2>
            <Button variant="primary" disabled>
              Disabled Button
            </Button>
          </div>

          {message && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg">
              <p className="text-green-800">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
