import { combineReducers } from 'redux';
import { SET_SELECTED_OPTION, SET_NOTE, ActionTypes } from './actions';

const selectedOption = (state = '', action: ActionTypes): string => {
  switch (action.type) {
    case SET_SELECTED_OPTION:
      return action.payload;
    default:
      return state;
  }
};

const note = (state = '', action: ActionTypes): string => {
  switch (action.type) {
    case SET_NOTE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedOption,
  note,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
