import { GET_NOTES, ADD_NOTE, DELETE_NOTE } from './type';
import axios from 'axios';

export const getAllNotes = (dispatch) => {
  axios
    .get('/api/note')
    .then((res) => {
      dispatch({
        type: GET_NOTES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addNote = (data, dispatch) => {
  axios
    .post('/api/note', data)
    .then((res) => {
      dispatch({
        type: ADD_NOTE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteNote = (id, dispatch) => {
  axios
    .delete(`/api/note/${id}`)
    .then(() =>
      dispatch({
        type: DELETE_NOTE,
        payload: id,
      }),
    )
    .catch((err) => console.log(err));
};

export const editNote = (id, updatedNotes, dispatch) => {
  const { title, content } = updatedNotes;

  const postData = {
    title,
    content,
    id,
  };
  axios.put(`/api/note/${id}`, postData).then(
    axios
      .get('/api/note')
      .then((res) => {
        dispatch({
          type: GET_NOTES,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err)),
  );
};
