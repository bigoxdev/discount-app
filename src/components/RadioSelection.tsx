import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/types';
import { setSelectedOption } from '../redux/actions';

const RadioSelection: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.selectedOption);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(e.target.value));
  };

  return (
    <div>
      <label className="mx-0.5">
        <input
          type="radio"
          value="Option A"
          checked={selectedOption === 'Option A'}
          onChange={handleOptionChange}
        />
        Option A
      </label>
      <label className="mx-0.5">
        <input
          type="radio"
          value="Option B"
          checked={selectedOption === 'Option B'}
          onChange={handleOptionChange}
        />
        Option B
      </label>
      <label className="mx-0.5">
        <input
          type="radio"
          value="Option C"
          checked={selectedOption === 'Option C'}
          onChange={handleOptionChange}
        />
        Option C
      </label>
    </div>
  );
};

export default RadioSelection;

