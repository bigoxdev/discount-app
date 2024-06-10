import { UnknownAction } from "redux";

export const SET_SELECTED_OPTION = 'SET_SELECTED_OPTION';
export const SET_NOTE = 'SET_NOTE';

interface SetSelectedOptionAction extends UnknownAction {
  type: typeof SET_SELECTED_OPTION;
  payload: string;
}

interface SetNoteAction extends UnknownAction {
  type: typeof SET_NOTE;
  payload: string;
}

export type ActionTypes = SetSelectedOptionAction | SetNoteAction;

export const setSelectedOption = (option: string): SetSelectedOptionAction => ({
  type: SET_SELECTED_OPTION,
  payload: option,
});

export const setNote = (note: string): any => ({
  type: SET_NOTE,
  payload: note,
});
