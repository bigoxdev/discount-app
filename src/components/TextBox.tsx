import React, { useState } from 'react';

const TextBox: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    if (/^DISCOUNT2024$/.test(code)) {
      setError('');
    } else {
      setError('Invalid discount code');
    }
    setDiscountCode(code);
  };

  return (
    <div>
      <input
        type="text"
        value={discountCode}
        onChange={handleChange}
        placeholder="Enter discount code"
        className="border p-2 rounded"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default TextBox;
