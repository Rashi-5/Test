import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [defaultInput, setDefaultInput] = useState('');
  const [outlineInput, setOutlineInput] = useState('');

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

          <div className="border-t pt-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Input Variants</h2>

            <div className="space-y-4">
              <Input
                variant="default"
                label="Default Input"
                placeholder="Enter text..."
                value={defaultInput}
                onChange={(e) => setDefaultInput(e.target.value)}
              />

              <Input
                variant="outline"
                label="Outline Input"
                placeholder="Enter text..."
                value={outlineInput}
                onChange={(e) => setOutlineInput(e.target.value)}
              />

              <Input
                variant="default"
                label="Disabled Input"
                placeholder="This is disabled..."
                disabled
              />
            </div>
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
