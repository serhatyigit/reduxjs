import {createSlice} from '@reduxjs/toolkit';

const namesSlice = createSlice({
  name: 'names',
  initialState: {names: ['Serhat']},
  reducers: {
    addName(state, action) {
      state.names.push(action.payload);
    },
  },
});

export const {addName} = namesSlice.actions;
export default namesSlice.reducer;
