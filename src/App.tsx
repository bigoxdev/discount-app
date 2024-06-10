import React from 'react';
import RadioSelection from './components/RadioSelection';
import TextBox from './components/TextBox';
import DiscountCodeGenerator from './components/DiscountCodeGenerator';
import NotesField from './components/NotesField';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Discount App</h1>
      <RadioSelection />
      <TextBox />
      <DiscountCodeGenerator />
      <NotesField />
    </div>
  );
};

export default App;
