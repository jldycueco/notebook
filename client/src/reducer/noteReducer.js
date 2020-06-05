import { ADD_NOTE, DELETE_NOTE, GET_NOTES } from '../action/type';

const noteReducer = (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(
          (note) => note._id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default noteReducer;
