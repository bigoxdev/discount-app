import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/types';
import { setNote } from '../redux/actions';

const NotesField: React.FC = () => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.note);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(e.target.value));
  };

  return (
    <div>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Enter your notes here"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default NotesField;
