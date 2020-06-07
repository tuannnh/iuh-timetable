import { fetchTimetable } from '../api';

export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILED = 'GET_FAILED';

export const getTimetable = (date, type) => async (dispatch) => {
  try {
    const timetable = await fetchTimetable(date, type);
    dispatch({ type: GET_SUCCESS, payload: timetable });
    return timetable;
  } catch (err) {
    dispatch({ type: GET_FAILED, payload: err.message });
  }
};
