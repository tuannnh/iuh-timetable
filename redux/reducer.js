import { combineReducers } from 'redux';
import { GET_SUCCESS, GET_FAILED } from './actions';

const merge = (prev, next) => Object.assign({}, prev, next);

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return merge(state, { timetable: action.payload });
    case GET_FAILED:
      return merge(state, { timetableError: action.payload });
    default:
      return state;
  }
};

const reducer = combineReducers({
  data: dataReducer,
});

export default reducer;
