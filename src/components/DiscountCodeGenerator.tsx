import React, { useState } from 'react';

const DiscountCodeGenerator: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string>('');

  const generateCode = () => {
    setGeneratedCode('NEWCODE123');
  };

  return (
    <div>
      <button onClick={generateCode} className="bg-blue-500 text-white p-2 rounded">
        Generate Discount Code
      </button>
      {generatedCode && <p>Generated Code: {generatedCode}</p>}
    </div>
  );
};

export default DiscountCodeGenerator;
